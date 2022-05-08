import React from 'react';
import { View } from 'react-native';
import Layout from '../components/Layout';

import WeatherBlockForm from '../components/WeatherBlockForm'

const Clima = () => {

    return (
        <Layout subtitle='Clima'>
            <View>
                <WeatherBlockForm />
            </View>
        </Layout>

    )

};

export default Clima;
