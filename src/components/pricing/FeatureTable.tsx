import React from 'react'
import '../pricing/Pricingtable.css'

const FeatureTable:React.FC = () => {
  return (
     <section className="pt-32 pb-20 md:pt-10 md:pb-22 relative overflow-hidden">
          <div className="container mx-auto px-4">
       <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text text-center">Feature Comparison</h2> 
            <div className="comparison-table">
                <table>
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Basic</th>
                            <th>Pro</th>
                            <th>Enterprise</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Number of Projects</td>
                            <td>5</td>
                            <td>20</td>
                            <td>Unlimited</td>
                        </tr>
                        <tr>
                            <td>Storage</td>
                            <td>10GB</td>
                            <td>50GB</td>
                            <td>200GB</td>
                        </tr>
                        <tr>
                            <td>Support</td>
                            <td>Email</td>
                            <td>Priority</td>
                            <td>24/7</td>
                        </tr>
                        <tr>
                            <td>API Access</td>
                            <td>No</td>
                            <td>Yes</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>Custom Integrations</td>
                            <td>No</td>
                            <td>No</td>
                            <td>Yes</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </section>
  )
}

export default FeatureTable