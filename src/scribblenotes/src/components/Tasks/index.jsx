import React from 'react'
// import { Text, View } from 'react-native'
import AddTaskButton from '../AddTaskButton'
import { Container, Title } from './styles'

const Tasks = () => {
    return (
        <Container>
            <Title>Tarefas</Title>
            <AddTaskButton />
        </Container>
    )
}

export default Tasks
