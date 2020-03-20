
import fetch from 'node-fetch'
import React, { Component } from 'react';
import Layout from '../components/Layout'
import Container from '../components/charts/Container'
import moment from 'moment'
moment.locale('es')

function IndexPage (props) {

  const dates = props.stats.map(value=> {
    return  moment(value.record_date).format("ddd - hh ")
  })
  const collection = props.stats.map(value=> {
    return  parseFloat(value.total_cases.replace(',', ''))
  })
  const collection2 = props.stats.map(value=> {
    return  parseFloat(value.total_deaths.replace(',', ''))
  })

  const filteredStats = props.stats.slice(Math.max(props.stats.length - 5, 0)).reverse(); 
  
    return (
      <Layout pageTitle="Realtime Data Visualization">
        <div style ={{display: 'flex'}}>
          <div style={{display: 'flex', flexDirection: 'column'}}>
        {
          filteredStats.length && filteredStats.map(value => {
            const {
              country_name,
              total_cases,
              total_deaths,
              active_cases,
              record_date,
            } = value
            
            const date = moment(record_date).format('ddd hh:mm')
            return(
            <div style={{display: 'flex', backgroundColor: 'gray'}}>
              <div style={{backgroundColor: 'white', marginBottom: '20px'}}>
                  { `Total cases: ${total_cases}` }
                  <div style={{backgroundColor: 'white'}}>
                  { `Confirmed: ${active_cases}, deaths: ${total_deaths}` }  
                </div>
                  { `Fecha: ${date} hora` }  
              </div>
            </div>)}
            )
        }
        </div>
        <div style={{display: 'flex', flex: '0.3', flexDirection: 'column', alignItems: 'center'}}>
          <div style={{display: 'flex', paddingTop: '50px', alignItems: 'center', justifyContent: 'center'}}>
            <Container dates={dates} collection={collection}/>
          </div>
          <div style={{display: 'flex', paddingTop: '50px'}}>

          <Container dates={dates} specificOptions={{color: 'ff0000'}} collection={collection2}/>
          </div>
          
          
        </div>
        </div>
      </Layout>
    );

}

export default IndexPage

export async function getStaticProps() {

  const urlHistoryByCountry = 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_particular_country.php'
  const prefix = '?'
  const query = 'country=spain'
  const headers = { 
    method: 'GET',
    headers: {
      "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
      "x-rapidapi-key": "754379983emsh3d99d228ac06e2cp1e782ajsn7616d2a8b629"
    }
  };

const finalUrl = urlHistoryByCountry + prefix + query

const res = await fetch(finalUrl, headers);
const results = await res.json()

  return {
    props: {
      stats:results.stat_by_country
    }
  }
}

