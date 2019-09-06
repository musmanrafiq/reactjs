import React, { Component } from 'react';
import AsyncSelect from 'react-select/async'

class ReactSelectExample extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
        selectedOption: {}
    }
  }

fetchData = (inputValue, callback) => {
    if (!inputValue) {
      callback([]);
    } else {
        setTimeout(() => {
  fetch("http://localhost:31962/api/values/findusers/" + inputValue, {
    method: "GET",
  })
  .then((resp) => {
    return resp.json()
  }) 
  .then((data) => {
      const tempArray = [];
     data.forEach((element) => {
            tempArray.push({ label: `${element.name}`, value: element.email });
     });
     callback(tempArray);            
  })
  .catch((error) => {
    console.log(error, "catch the hoop")
  });
});
}
}

 onSearchChange = (selectedOption) => {
    if (selectedOption) {

    this.setState({
        selectedOption
       });
    }
  };
  render() {
      return ( <div>
           <AsyncSelect
                value={this.state.selectedOption}
                loadOptions={this.fetchData}
                placeholder="Admin Name"
                className="venueAdminControl"
                onChange={(e) => {
                    this.onSearchChange(e);
                }}
                defaultOptions={false}
                />
      </div>)
  }

}

export default ReactSelectExample;