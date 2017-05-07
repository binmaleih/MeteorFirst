//any JS here is automatically ran for us


// import the react liberary
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/image_list';
import axios from 'axios';



//create a componant
class App extends Component {
  //add costractor method
  constructor (props) {
    //we have to put it in all constructor
    super(props);
//
    this.state = {images: []};
  }
  componentWillMount(){
    // Fantastic place to load data!!
    axios.get('https://api.imgur.com/3/gallery/hot/viral/1')
    .then (response => this.setState({ images: response.data.data}));
    //Never Do this
    //1-this.state.images= [ {}, {} ];
}
  render() {
    return (
      <div>
        <ImageList images={this.state.images} />
      </div>
    );
  }
};




//render this componantto the screen
Meteor.startup(() =>{
  ReactDOM.render(<App />, document.querySelector('.container'));

});
