import './App.css'
import Card from './card'

export default function App() {
  const data=[
    {
    Type:"FREE",
    Amount:"$0/month",
    description:["Single User","50GB Storage","Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support","Free Subdomain","Monthly Status Reports"],
    button:"BUTTON",
    Check:false,
  },
  {
  Type:"PLUS",
  Amount:"$9/month",
  description:["5 User","50GB Storage","Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support","Free Subdomain","Monthly Status Reports"],
  button:"BUTTON",
  Check:false,

  },
  {
    Type:"PRO",
    Amount:"$49/month",
    description:["Unlimited User","50GB Storage","Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support","Free Subdomain","Monthly Status Reports"],
    button:"BUTTON",
    Check:true,

    },
];
  return (
    <div className="container">
    <div className="row">
    {data.map((d,index)=>(
      <Card key={index} Type={d.Type} Amount={d.Amount} description={d.description} button={d.button} Check={d.Check}/>
    ))
    }
    
    </div>
    </div>
      
  
    
  )
}


