import React, { useState } from 'react';
import './App.css';
import NumberFormat from 'react-number-format';
import Plot from 'react-plotly.js'
import logo from '../public/pagecheck.png'

interface Money {
  formattedValue: string;
  floatValue: number | null;
}

const usePercent = (initialFormatted: string = '', initialVal: number | null = null): [Money, (to: string) => void] => {
  const [money, setMoney] = useState({
    formattedValue: initialFormatted,
    floatValue: initialVal
  })

  return [money, (to: string): void => {
    const num = Number(to.replace('%', ''))

    if (isNaN(num)) {
      setMoney({
        formattedValue: to,
        floatValue: null
      })
    } else {
      setMoney({
        formattedValue: to,
        floatValue: num
      })
    }
  }]
}

const useMoney = (initialFormatted: string = '', initialVal: number | null = null): [Money, (to: string) => void] => {
  const [money, setMoney] = useState({
    formattedValue: initialFormatted,
    floatValue: initialVal
  })

  return [money, (to: string): void => {
    const num = Number(to.replace('$', ''))

    if (isNaN(num)) {
      setMoney({
        formattedValue: to,
        floatValue: null
      })
    } else {
      setMoney({
        formattedValue: to,
        floatValue: num
      })
    }
  }]
}

const App: React.FC = () => {

  const [cpc, setCPC] = useMoney()
  const [conversionRate, setConversionRate] = usePercent()
  const [manualCAC, setManualCAC] = useMoney('$50.00', 50)
  const [initialMoney, setInitialMoney] = useMoney('$1000.00', 1000)
  const [period, setPeriod] = useState(12)
  const [reinvestmentRatio, setReinvestmentRatio] = usePercent('50%', 50)
  const [arpc, setArpc] = useMoney('$29.00', 29)
  const [costPerCustomer, setCostPerCustomer] = useMoney('$5.00', 5)
  const [fixedMonthlyCost, setFixedMonthlyCost] = useMoney('$20.00', 20)
  const [churnRate, setChurnRate] = usePercent('5%', 5)

  let cac = {
    formattedValue: '',
    floatValue: null as number | null
  }
  if (cpc.floatValue && conversionRate.floatValue) {
    cac.floatValue = (Number(cpc.floatValue) / (Number(conversionRate.floatValue) / 100))
    cac.formattedValue = '$' + (Number(cpc.floatValue) / (Number(conversionRate.floatValue) / 100)).toFixed(2)
  } else if (manualCAC.floatValue) {
    cac = manualCAC
  }

  const updateCPC = (e: React.ChangeEvent<HTMLInputElement>) => {
    setManualCAC('')
    setCPC(e.target.value)
  }

  const updateCR = (e: React.ChangeEvent<HTMLInputElement>) => {
    setManualCAC('')
    setConversionRate(e.target.value)
  }

  const updateManualCAC = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConversionRate('')
    setCPC('')
    setManualCAC(e.target.value)
  }

  let currentPeriod = 0
  let currentMoney = 0
  let customers = 0

  const revenuePerPeriod = []
  const adSpendPerPeriod = []
  const currentMoneyPerPeriod = []

  if (cac.floatValue && initialMoney.floatValue && reinvestmentRatio.floatValue && churnRate.floatValue && arpc.floatValue && costPerCustomer.floatValue && fixedMonthlyCost.floatValue !== null) {
    currentMoney = initialMoney.floatValue
    while (currentPeriod < period) {
      currentMoneyPerPeriod.push(currentMoney)
      const adSpend = currentMoney * (reinvestmentRatio.floatValue / 100)
      adSpendPerPeriod.push(adSpend)
      customers -= Math.ceil((churnRate.floatValue / 100) * customers)
      currentMoney -= adSpend
      customers += Math.floor(adSpend / cac.floatValue)

      const revenue = customers * arpc.floatValue
      revenuePerPeriod.push(revenue)
      currentMoney += revenue
      currentMoney -= costPerCustomer.floatValue * customers
      currentMoney -= fixedMonthlyCost.floatValue

      currentPeriod++
    }
  }

  return (
    <div className='bg-near-white pb4'>
      <div className='mh0-ns mh3'>
        <div className='center mw7'>
          <div className='f1 tc pt3 b'>SaaS Growth Calculator</div>
          <div className='f5 tc mt3 mb3'>Calculate SaaS growth as a function of common metrics.</div>
          <div className='f5 tc mt3 mb3'>Built by <a href='https://twitter.com/meyer9_'>@meyer9_</a></div>
          <div className='relative'>
            <Plot
              data={[
                {
                  y: revenuePerPeriod,
                  type: 'scatter',
                  mode: 'lines+markers',
                  marker: {color: 'red'},
                  name: 'MRR'
                },
                {
                  y: adSpendPerPeriod,
                  type: 'scatter',
                  mode: 'lines+markers',
                  marker: {color: 'blue'},
                  name: 'Marketing Spend'
                },
                {
                  y: currentMoneyPerPeriod,
                  type: 'scatter',
                  mode: 'lines+markers',
                  marker: {color: 'green'},
                  name: 'Current Money',
                },
              ]}
              layout={ {
                title: 'Growth',
                width: 768,
                xaxis: {
                  title: 'Month',
                  zeroline: false
                },
                yaxis: {
                  title: 'Cash ($)',
                  zeroline: false,
                  tickformat: '$.2f',
                  hoverformat: '$.2f'
                },
                autosize: true,
              } }
              useResizeHandler
              config={ {displayModeBar: false, responsive: true } }
              style={ {width: '100%', height: '100%'}}
            />
          </div>
          <div className='pa4 bg-white mt3 mb3 flex lh-copy items-center'>
            <img src={logo} width='72px' height='72px' className='br3 mr3' alt='pagecheck logo' />
            <div className='flex-grow-1'>
              <div className='f4'>Sponsored by <a className='blue' href='https://pagecheck.app'>page<strong>check</strong></a>.</div>
              <div>Convert more users by ensuring pages load fast. pagecheck monitors your website and alerts you of performance or security regressions.</div>
            </div>
          </div>
          <div className='w-100 bg-white br3 pa4 mt4 lh-copy'>
            { cac.floatValue && initialMoney.floatValue && reinvestmentRatio.floatValue && churnRate.floatValue && arpc.floatValue && costPerCustomer.floatValue &&  fixedMonthlyCost.floatValue !== null ?
              <div>In <strong>{period} months</strong>, we expect you'll have <strong>{customers} customers</strong> at <strong><NumberFormat value={arpc.floatValue} displayType='text' prefix='$' thousandSeparator=',' /></strong> each for an MRR of <strong><NumberFormat value={customers * arpc.floatValue} displayType='text' prefix='$' thousandSeparator=',' /></strong> and ARR of <strong><NumberFormat value={customers * arpc.floatValue * 12} displayType='text' prefix='$' thousandSeparator=',' /></strong>.</div>
              : <div>Missing parameters</div> }
          </div>
          <div className='w-100 bg-white br3 pa4 mt4'>
            <div className='blue b mb3'>Parameters</div>
            <div className='ml3'>
              <div className='mb3 db'>
                <div className='mb1'>Initial Investment</div>
                <NumberFormat
                  displayType='input'
                  prefix='$'
                  decimalScale={2}
                  fixedDecimalScale
                  placeholder='Initial Investment'
                  className='w-100'
                  value={initialMoney.formattedValue}
                  onChange={(e) => setInitialMoney(e.target.value)} />
              </div>
              <div className='mb3 db'>
                <div className='mb1'>Period (months)</div>
                <NumberFormat
                  displayType='input'
                  placeholder='Period (months)'
                  className='w-100'
                  value={period}
                  onChange={(e) => setPeriod(Number(e.target.value))} />
              </div>
              <div className='mb3 db'>
                <div className='mb1'>Reinvestment Ratio</div>
                <NumberFormat
                  displayType='input'
                  suffix='%'
                  placeholder='Reinvestment Ratio'
                  className='w-100'
                  value={reinvestmentRatio.formattedValue}
                  onChange={(e) => setReinvestmentRatio(e.target.value)} />
              </div>
            </div>
            <div className='blue b'>Customer Acquisition</div>
            <div className='ml3'>
              <p>Either enter the cost-per-click and the conversion rate or just the customer acquisition cost.</p>
              <label htmlFor='cost-per-click' className='mb3 db'>
                <div className='mb1'>Cost Per Click (how much does it cost to get users to click on your link):</div>
                <NumberFormat
                  displayType='input'
                  prefix='$'
                  decimalScale={2}
                  fixedDecimalScale
                  placeholder='Cost Per Click'
                  name='cost-per-click'
                  className='w-100'
                  value={cpc.formattedValue}
                  onChange={updateCPC} />
              </label>
              <label htmlFor='conversion-rate' className='mb3 db'>
                <div className='mb1'>Conversion Rate (how many users who click on your link sign up):</div>
                <NumberFormat
                  displayType='input'
                  suffix='%'
                  placeholder='Conversion Rate'
                  name='conversion-rate'
                  className='w-100'
                  value={conversionRate.formattedValue}
                  onChange={updateCR} />
              </label>
              <div className='ma4 tc'>OR</div>
              <label htmlFor='cac' className='mb3 db'>
                <div className='mb1'>Customer Acquisition Cost (how much does it cost to acquire a customer):</div>
                <NumberFormat
                  displayType='input'
                  prefix='$'
                  placeholder='Customer Acquisition Cost'
                  name='cac'
                  decimalScale={2}
                  fixedDecimalScale
                  className='w-100'
                  value={cac.formattedValue}
                  onChange={updateManualCAC} />
              </label>
            </div>
            <div className='blue b mb3'>Customer Value</div>
            <div className='ml3'>
              <div className='mb3 db'>
                <div className='mb1'>Average Monthly Revenue per Customer:</div>
                <NumberFormat
                  displayType='input'
                  prefix='$'
                  decimalScale={2}
                  fixedDecimalScale
                  placeholder='Average Monthly Revenue per Customer'
                  className='w-100'
                  value={arpc.formattedValue}
                  onChange={(e) => setArpc(e.target.value)} />
              </div>
              <div className='mb3 db'>
                <div className='mb1'>Cost Per Customer:</div>
                <NumberFormat
                  displayType='input'
                  prefix='$'
                  decimalScale={2}
                  fixedDecimalScale
                  placeholder='Cost Per Customer'
                  className='w-100'
                  value={costPerCustomer.formattedValue}
                  onChange={(e) => setCostPerCustomer(e.target.value)} />
              </div>
              <div className='mb3 db'>
                <div className='mb1'>Fixed Monthly Cost:</div>
                <NumberFormat
                  displayType='input'
                  prefix='$'
                  decimalScale={2}
                  fixedDecimalScale
                  placeholder='Fixed Monthly Cost'
                  className='w-100'
                  value={fixedMonthlyCost.formattedValue}
                  onChange={(e) => setFixedMonthlyCost(e.target.value)} />
              </div>
              <div className='mb3 db'>
                <div className='mb1'>Churn Rate:</div>
                <NumberFormat
                  displayType='input'
                  suffix='%'
                  placeholder='Churn Rate'
                  className='w-100'
                  value={churnRate.formattedValue}
                  onChange={(e) => setChurnRate(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
