import logo from './logo.svg';
import './App.css';
import data from './nana.json'

function App() {
  // Initialize Prepaid Items
  const prepaidItems = Object.keys(data.Prepaid)

  // Initialize Postpaid Items
  const postpaidItems = Object.keys(data.Postpaid)
  
  // Initialize branches of PREPAID and POSTPAID
  let branch1Prepaid, branch2Prepaid, branch1Postpaid, branch2Postpaid;

  // Loop through data of 1st branch
  const loopBranch1 = (category, parent1) => {
    if (category === 'Prepaid'){
      branch1Prepaid = Object.keys(data[`${category}`][`${parent1}`])
    } else {
      branch1Postpaid = Object.keys(data[`${category}`][`${parent1}`])
    }
  }

  // Loop through data of 2nd branch
  const loopBranch2 = (category, parent2, parent3) => {
    if (category === 'Prepaid'){
      branch2Prepaid = Object.values(data[`${category}`][`${parent2}`][`${parent3}`])
    } else {
      branch2Postpaid = Object.values(data[`${category}`][`${parent2}`][`${parent3}`])
    }
  }

  return (
    <div>
      {prepaidItems.map((parent1, index) => {
        // Looping data Prepaid, contoh: Pulsa
        return(
          <div>
          <p>{parent1}</p>  
          {loopBranch1('Prepaid', parent1)}
          {branch1Prepaid.map((parent2, index) => {
            // Looping data branch1, contoh : XL, Smart, Indosat
            return(
              <ul>
                <li>{parent2}</li>
                {loopBranch2('Prepaid', parent1, parent2)}
                {branch2Prepaid.map((parent3, index) => {
                  // Looping data branch2, contoh: Pulsa 10k, Pulsa 20k, Pulsa 50k
                  return(
                    <table>
                      <tr>
                        <th>Product Code</th>
                        <th>Product Name</th>
                        <th>Sell Price</th>
                        <th>Margin Type</th>
                        <th>Margin</th>
                        <th>Partner Price</th>
                      </tr>
                      <tr>
                        <td>{parent3.product_code}</td>
                        <td>{parent3.product_name}</td>
                        <td>{parent3.sell_price}</td>
                        <td>{parent3.margin_type}</td>
                        <td>{parent3.margin}</td>
                        <td>{parent3.sell_price_merchant}</td>
                      </tr>
                    </table>
                  )
                })}
              </ul>
            )
          })}
          </div>
        )
      })}
      {postpaidItems.map((parent1, index) => {
        // Looping data Postpaid, contoh: Tagihan Listrik
        return(
          <div>
          <p>{parent1}</p>  
          {loopBranch1('Postpaid', parent1)}
          {branch1Postpaid.map((parent2, index) => {
            // Looping data branch1, contoh : PLN
            return(
              <ul>
                <li>{parent2}</li>
                {loopBranch2('Postpaid', parent1, parent2)}
                {branch2Postpaid.map((parent3, index) => {
                  // Looping data branch2, contoh: PLN
                  return(
                    <table>
                      <tr>
                        <th>Product Code</th>
                        <th>Product Name</th>
                        <th>Sell Price</th>
                        <th>Margin Type</th>
                        <th>Margin</th>
                        <th>Partner Price</th>
                      </tr>
                      <tr>
                        <td>{parent3.product_code}</td>
                        <td>{parent3.product_name}</td>
                        <td>{parent3.sell_price}</td>
                        <td>{parent3.margin_type}</td>
                        <td>{parent3.margin}</td>
                        <td>{parent3.sell_price_merchant}</td>
                      </tr>
                    </table>
                  )
                })}
              </ul>
            )
          })}
          </div>
        )
      })}
    </div>
  );
}

export default App;
