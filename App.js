import React from 'react';
import {View}from 'react-native';
import Corpo from './Corpo';
import SiteHeader from './SiteHeader';
import Footer from './Footer';

const App =() => {
return (
<View>
<SiteHeader />
<Corpo />

<Footer />

</View>
);
};

export default App;