import { useIsFocused } from '@react-navigation/native'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Modal, StatusBar, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../Components/Button'
import InputField from '../../../Components/InputField'
import Text from '../../../Components/Text'
import { baseUrl, colors } from '../../../Constants'
import { setToken } from '../../../Redux/reducer'
import { styles } from './style'
import Card from '../../../Components/Card'
import Header from '../../../Components/Header'

const Home = ({ navigation }) => {
  const [toDoTasks, setToDoTasks] = useState([])
  const [loading, setLoading] = useState(false)
  const [logoutLoading, setLogoutLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch()
  const token = useSelector((state) => state?.reducer?.token);
  const focused = useIsFocused()

  useEffect(() => {
    focused && getAllItems()
  }, [focused])

  const getAllItems = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${baseUrl.api}items`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      if (res?.data?.success) {
        setToDoTasks(res.data.items.data)
      }
    }
    catch (err) {
      console.error('Login error:', err);
    }
    finally {
      setLoading(false);
    }
  };

  const deleteItem = async (item) => {
    const id = item?.id
    setLoading(true)
    try {
      const res = await axios.delete(`${baseUrl.api}item/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      console.log('Data', res)
      if (res?.data?.success) {
        const updatedTasks = toDoTasks.filter(task => task.id !== id);
        setToDoTasks(updatedTasks);
        setLoading(false)
      }
    }
    catch (err) {
      console.error('Login error:', err);
    }
  }

  const handleLogout = async () => {
    setLogoutLoading(true);
    try {
      const res = await axios.post(`${baseUrl.api}logout`, {
        token: token,
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log('RES', res)
      if (res?.data?.success) {
        setLogoutLoading(false)
        dispatch(setToken(null));
      }
    } catch (err) {
      console.error('Logout error:', err);
      setLogoutLoading(false);
    }
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
  };
  const filteredItems =
    toDoTasks.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  const _renderEmptyData = () => {
    return (
      <View style={styles.upcomingView}>
        <Text style={styles.upcomingTodo} value="You don't have any due task yet :)" />
      </View>
    )
  }

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={colors.primaryColor} />

      <Header
        topTitle='TODO'
      />
      <InputField
        placeholder='Search your next task'
        onChangeText={handleSearch} />
      <Text
        style={styles.listText}>List of ToDo's</Text>
      {loading ? (
        <ActivityIndicator style={styles.ActivityIndicatorView} size={"large"} color={colors.primaryColor} animating={loading} />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={_renderEmptyData()}
          data={filteredItems}
          renderItem={({ item, index }) => (
            <Card
              title={item.title}
              description={item.description}
              cardPress={() => navigation.navigate('ViewToDo', { data: item })}
              deletePress={() => deleteItem(item)}
            />
          )}
          keyExtractor={item => item.id.toString()} />

      )}

      <Button
        onPress={() => navigation.navigate('CreateToDo')}
        style={styles.btnTodo}
        title="Create New ToDo"
      />
      <Button
        onPress={() => handleLogout()}
        style={styles.btnLogout}
        btnTitleStyle={styles.btnTextLogout}
        loading={logoutLoading}
        title="Logout"
      />

    </View >
  )
}

export default Home