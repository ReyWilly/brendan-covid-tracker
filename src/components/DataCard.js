import React from "react"
import axios from "axios"


export default class DataCard extends React.Component {
    state = {
        covData: [],
    };

    componentDidMount(){
        axios({
            "method":"GET",
            "url":"https://covid-19-data.p.rapidapi.com/totals",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"covid-19-data.p.rapidapi.com",
            "x-rapidapi-key":"2415727f68msh87057d5ef130bf1p1bd187jsn86e58a994280"
            },"params":{
            "format":"undefined"
            }
            })
            
            .then((response)=>{
              console.log(response.data[0])
              this.setState({covData: response.data[0]})
            })

            .catch((error)=>{
              console.log(error)
            })
    }

    render(){
        return <div>
                <p><strong>Confirmed:</strong> {this.state.covData.confirmed}</p>
                <p><strong>Recovered:</strong> {this.state.covData.recovered}</p>
                <p><strong>Critical:</strong> {this.state.covData.critical}</p>
                <p><strong>Deaths:</strong> {this.state.covData.deaths}</p>
            </div>
    }
}