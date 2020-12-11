import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../shared/card';
import ReviewForm from './reviewForm';

export default function Home({navigation}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: 'Dejeuner d"affaire',
      rating: 5,
      body: 'Dejeuner  a la defense',
      key: '1',
    },
    {
      title: 'Jouer au golf avec l"equipe',
      rating: 4,
      body: 'Aller  jouer au golf avec des amis',
      key: '2',
    },
    {
      title: 'Dinner familliale',
      rating: 3,
      body: 'Dinner sur les champs avec des amis',
      key: '3',
    },
    {
      title: 'Sortie nocturne',
      rating: 2,
      body: 'aller au duplex pour danser',
      key: '4',
    },
    {
      title: 'Aller jouer au foot',
      rating: 1,
      body: 'jouer tous les dimanches avec des amis',
      key: '5',
    },
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <Icon
              name="close"
              size={24}
              style={{...styles.modalToggle, ...styles.modalClose}}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Icon
        name="plus"
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />

      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 40,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});
