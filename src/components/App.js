import React from 'react';
import unsplash from '../Api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = {
        images: [],
    }
    getData = async (term) => {
        const res = await unsplash.get('/search/photos', {
            params: { query: term },
        });
        this.setState({ images: res.data.results });
    }
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.getData} />
                We found: {this.state.images.length} images
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;

// 224e2fd5f8cdad24761a0c1cab6668b92e2b09f6ff9ac215a0cc4108a5965059
