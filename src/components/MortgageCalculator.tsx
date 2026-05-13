import { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function MortgageCalculator() {
  const [propertyPrice, setPropertyPrice] = useState(10000000);
  const [downPayment, setDownPayment] = useState(2000000);
  const [interestRate, setInterestRate] = useState(12);
  const [loanTerm, setLoanTerm] = useState(20);

  // Formatting helper
  const f = (val: number) => new Intl.NumberFormat('en-PK').format(Math.round(val));

  // Calculations
  const loanAmount = propertyPrice - downPayment;
  const monthlyRate = (interestRate / 100) / 12;
  const numPayments = loanTerm * 12;

  let monthlyPayment = 0;
  if (monthlyRate === 0) {
    monthlyPayment = loanAmount / numPayments;
  } else if (loanAmount > 0 && interestRate > 0) {
    monthlyPayment = 
      loanAmount * 
      (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
      (Math.pow(1 + monthlyRate, numPayments) - 1);
  }

  const totalPayment = monthlyPayment * numPayments;
  const totalInterest = Math.max(0, totalPayment - loanAmount);
  
  // Percentages for visualization
  const principalPercent = totalPayment > 0 ? (loanAmount / totalPayment) * 100 : 0;
  const interestPercent = totalPayment > 0 ? (totalInterest / totalPayment) * 100 : 0;

  return (
    <section id="mortgage-calculator" className="py-16 md:py-24 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Calculator className="h-6 w-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Mortgage Calculator</h2>
          </div>
          <div className="w-20 h-1 bg-primary mx-auto mb-4 rounded-full"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Plan your investment with our easy-to-use mortgage calculator
          </p>
        </div>

        <div className="bg-card text-card-foreground flex flex-col rounded-xl border border-border shadow-sm max-w-5xl mx-auto p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Input Form */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 pb-2 mb-4 border-b border-border">
                <Calculator className="h-5 w-5 text-primary" />
                Loan Details
              </h3>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Property Price (PKR)</label>
                  <input 
                    type="number" 
                    value={propertyPrice} 
                    onChange={e => setPropertyPrice(Number(e.target.value) || 0)}
                    className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Down Payment (PKR)</label>
                  <input 
                    type="number" 
                    value={downPayment} 
                    onChange={e => setDownPayment(Number(e.target.value) || 0)}
                    className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Loan Amount (PKR)</label>
                  <input 
                    type="text" 
                    value={f(loanAmount)}
                    readOnly
                    className="flex h-10 w-full rounded-md border border-input bg-muted px-3 py-1 text-sm shadow-sm opacity-70 cursor-not-allowed"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Interest Rate (%)</label>
                  <input 
                    type="number" 
                    value={interestRate} 
                    step="0.1"
                    onChange={e => setInterestRate(Number(e.target.value) || 0)}
                    className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  />
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Loan Term (Years)</label>
                    <span className="text-sm font-semibold text-primary">{loanTerm} Years</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="30" 
                    value={loanTerm} 
                    onChange={e => setLoanTerm(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1 Year</span>
                    <span>30 Years</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold pb-2 mb-4 border-b border-border">
                Calculation Results
              </h3>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center transform scale-95 md:scale-100 transition-transform">
                <p className="text-sm text-muted-foreground mb-2">Monthly Payment</p>
                <p className="text-3xl md:text-5xl font-bold text-primary">
                  PKR {f(monthlyPayment)}
                </p>
              </div>

              <div className="bg-card border border-border p-5 rounded-xl shadow-sm space-y-5">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                  Payment Breakdown
                </h4>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Total Payment</span>
                    <span className="font-semibold tracking-wide">PKR {f(totalPayment)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Total Interest</span>
                    <span className="font-semibold tracking-wide text-red-500">PKR {f(totalInterest)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Loan Amount</span>
                    <span className="font-semibold tracking-wide">PKR {f(loanAmount)}</span>
                  </div>
                </div>

                <div className="border-t border-border pt-5 space-y-3">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                    Principal vs Interest
                  </h4>
                  
                  <div className="w-full h-5 rounded-full overflow-hidden flex bg-muted">
                    <div className="h-full bg-primary" style={{ width: `${principalPercent}%` }}></div>
                    <div className="h-full bg-red-400" style={{ width: `${interestPercent}%` }}></div>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-sm bg-primary"></div>
                      <span className="text-muted-foreground">Principal ({principalPercent.toFixed(1)}%)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-sm bg-red-400"></div>
                      <span className="text-muted-foreground">Interest ({interestPercent.toFixed(1)}%)</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
