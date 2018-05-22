import React, { Component } from 'react';

class TableView extends Component {

     

        

  render() {
    
    
    return (

      <div className="TableView">
          <table>
            <thead>
              <tr>
                  <th>Name</th>
                  <th>Item Name</th>
                  <th>Item Price</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Alvin</td>
                <td>Eclair</td>
                <td>$0.87</td>
              </tr>
                
        
          </tbody>
          </table> 
      </div>
    );
  }
}

export default TableView;
