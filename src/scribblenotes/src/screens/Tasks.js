import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import NewTaskButton from '../components/NewTaskButton';
import Layout from '../components/layout/Layout';
import ScrollTask from '../components/Scroll';


const Tasks = () => {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Layout subtitle='Home'>
      <NewTaskButton />
      <ScrollTask />
    </Layout>
  );
}

export default Tasks