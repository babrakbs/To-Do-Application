import { useIsFocused } from '@react-navigation/native'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Alert, FlatList, Modal, StatusBar, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import CustomButton from '../../../Components/Button'
import InputField from '../../../Components/InputField'
import CustomText from '../../../Components/Text'
import { baseUrl, colors } from '../../../Constants'
import { setToken } from '../../../Redux/reducer'
import { styles } from './style'

const Home = ({ navigation }) => {
  const [response, setResponse] = useState()
  const [toDoTasks, setToDoTasks] = useState([])
  const [loading, setLoading] = useState(false)
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
        setResponse(res.data);
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
    try {
      const res = await axios.delete(`${baseUrl.api}item/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      console.log('Data', res)
      if (res?.data?.success) {
        setResponse(res.data);
        const updatedTasks = toDoTasks.filter(task => task.id !== id);
        setToDoTasks(updatedTasks);
      }
    }
    catch (err) {
      console.error('Login error:', err);
    }
  }
  const handleLogout = async () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => confirmLogout() }
      ],
      { cancelable: false }
    );
  };

  const confirmLogout = async () => {
    setLoading(true);
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
        dispatch(setToken(null));
      }
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
  };
  const filteredItems = toDoTasks.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={colors.primaryColor} />
      <CustomText
        customStyle={styles.head}
        value="To Do's List" />
      <InputField
        placeholder='Search your next task'
        onChangeText={handleSearch} />
      <CustomText
        customStyle={styles.listText}
        value="List of ToDo's" />
      {filteredItems.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredItems}
          renderItem={({ item, index }) => (
            <CustomButton styles={styles.flatListItemView}
              onPress={() => navigation.navigate('ViewToDo', { data: item })}>
              <View style={styles.titleDescpView}>
                <CustomText numberOfLines={1} customStyle={styles.flatListTitle}>
                  {item.title}
                </CustomText>
                <CustomText numberOfLines={1} customStyle={styles.flatListDescription} >
                  {item.description}
                </CustomText>
              </View>
              <View style={styles.deleteView}>
                <CustomButton onPress={() => deleteItem(item)} styles={styles.deleteBtn}>
                  <CustomText customStyle={styles.deleteText} value='Delete' />
                </CustomButton>
              </View>
            </CustomButton>
          )}
          keyExtractor={item => item.id.toString()} />
      ) : (
        <View style={styles.upcomingView}>
          <CustomText customStyle={styles.upcomingTodo} value="You don't have any due task yet :)" />
        </View>
      )}
      <CustomButton
        styles={styles.btnTodo}
        onPress={() => navigation.navigate('CreateToDo')}>
        <CustomText
          customStyle={styles.btnTextTodo}
          value='Create New ToDo' />
      </CustomButton>

      <CustomButton
        onPress={() => handleLogout()}
        styles={styles.btnLogout}>
        <CustomText
          customStyle={styles.btnTextLogout}
          value='Logout' />
      </CustomButton>

      <Modal
        transparent={false}
        animationType="slide"
        visible={loading}
        onRequestClose={() => {
          setLoading(false);
        }}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <ActivityIndicator size={"large"} color={colors.primaryColor} animating={loading} />
          </View>
        </View>
      </Modal>
    </View >
  )
}

export default Home