import React from 'react';
import { Text, View } from 'react-native';
import Layout from '../../components/Layout';

import { Container, Title } from './styles';

const Home = ({ children }) => {
    return (
    <Layout>
        <Container>
            <Title>Scribblenotes</Title>
            {children}
        </Container>
    </Layout>
    )
}

export default Home
