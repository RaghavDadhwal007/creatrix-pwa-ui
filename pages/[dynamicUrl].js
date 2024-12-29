import withApollo from 'libraries/withApollo';
import withReducer from 'libraries/withRedux';
import React from 'react';
import CreatigoApp from 'src/CreatigoApp';

class PageRoute extends React.PureComponent {
    render() {
        return <CreatigoApp {...this.props} />;
    }
}

export default withReducer(withApollo({ ssr: true })(PageRoute));
