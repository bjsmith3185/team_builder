import React, { Component } from 'react';
import API from '../../utils/API';
import UpdateForm from "../../components/UpdateForm";
import UpdateList from "../../components/UpdateList";
// import "./operations.css";

/* Import Components */

export default class Operations extends React.Component {
  state = {
    company: '',
    searchWords: '',
    input: '',

    allCompanies: [],
    makeChanges: false,

    newCompanyName: '',
    newSearchWords: '',

  }

  componentDidMount = () => {
    this.showAllCompanies();
  };


  showAllCompanies = () => {

    API.allCompanies()
      .then(res => {
        console.log("this is the return for showAllCompanies()")
        console.log(res.data)
        this.setState({
          allCompanies: res.data
        })
      })
      .catch(err => console.log(err));
  };


  change = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();

    let updatedCompany = '';
    let updatedSearchWords = [];

    if (this.state.newCompanyName === '') {
      updatedCompany = this.state.company;
    } else {
      updatedCompany = this.state.newCompanyName
    };

    if (this.state.newSearchWords === '') {
      updatedSearchWords = this.state.searchWords;
    } else {
      updatedSearchWords = this.state.newSearchWords;
      let searchWordsArray = [];
      searchWordsArray = this.state.newSearchWords.split(/[ ,]+/);
      // console.log("this is the keywords array");
      // console.log(searchWordsArray)
    };

    console.log(`
    this is the information sent to the updateCompany API:
     original company name: ${this.state.company}.
      data object: 
        company: ${updatedCompany}
        searchWords: ${updatedSearchWords}
        
        `)


    API.updateCompany(
      this.state.company,
      {
        company: updatedCompany,
        searchWords: updatedSearchWords
      })
      .then(res => {
        console.log("this is the return for updateCompany()")
        console.log(res.data)

      })
      .catch(err => console.log(err));


    this.setState({
      company: '',
      searchWords: '',
      makeChanges: false,
      newCompanyName: '',
      newSearchWords: '',
    });
    this.showAllCompanies();
  };

  makeChanges = (company, searchWords) => {
    console.log("company: " + company);
    console.log("searchwords:");
    console.log(searchWords);

    this.setState({
      makeChanges: true,
      company: company,
      searchWords: searchWords,

    })

  };

  removeCompany = (company) => {
    console.log("starting to delete company")

    API.deleteCompany(company)
      .then(res => {
        console.log("this is the return for deleteCompany()")
        console.log(res.data)
        this.showAllCompanies();
      })
      .catch(err => console.log(err));

  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-6">

            <UpdateList
              allCompanies={this.state.allCompanies}
              makeChanges={this.makeChanges}
              removeCompany={this.removeCompany}
            />

          </div>

          <div className="col-6">
            {this.state.makeChanges ? (
              <div>
                <UpdateForm

                  company={this.state.company}
                  searchWords={this.state.searchWords}

                  newCompanyName={this.state.newCompanyName}
                  newSearchWords={this.state.newSearchWords}

                  handleInputChange={this.change}
                  handleFormSubmit={this.onSubmit}
                />


              </div>
            ) : (
                <div>nothing to show yet</div>
              )}
          </div>

        </div>








      </div>
    )
  }
}

