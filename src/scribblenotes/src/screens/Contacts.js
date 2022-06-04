import React from 'react';
import { View, Text } from 'react-native';
import Layout from '../components/layout/Layout';

const Contacts = () => {
    return (
        <Layout subtitle='Contatos' goBack={() => navigation.navigate('Tasks')}>
            <View>
                <Text>
                    Scribblenotes Team
                </Text>
                <Text>
                    Email: scribblenotes@gmail.com
                </Text>
                <Text>
                    Instagram: @scribblenotes
                </Text>
            </View>
        </Layout>

    )
}

export default Contacts;
