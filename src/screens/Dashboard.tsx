import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GET_COMMENTS, GET_POSTS} from '../utils/url';
import PostCard from '../components/PostCard';
import {DataTable} from 'react-native-paper';
import {Modal, Text} from 'react-native-paper';

interface cmt {
  postId: number;
  // cmt: object;
}

interface element {
  id: number;
}

interface props {
  element: element;
  cmt: object;
}

const Dashboard: React.FC<props> = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  useEffect(() => {
    getPosts();
    getComments();
  }, []);

  useEffect(() => {
    posts?.map(element => {
      let temp = comments.filter(cmt => cmt.postId == element.id);
      if (temp) {
        element.comments = temp.length;
      }
    });
  }, [posts, comments]);

  const getPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(GET_POSTS);
      const json = await response.json();
      // console.log('json===>', json);
      setPosts(json);
    } catch (error) {
      console.error(error);
      setErrorModal(true);
    } finally {
      setLoading(false);
    }
  };

  const getComments = async () => {
    setLoading(true);
    try {
      const response = await fetch(GET_COMMENTS);
      const json = await response.json();
      // console.log('json===>', json);
      setComments(json);
    } catch (error) {
      console.error(error);
      setErrorModal(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {loading ? (
        <ActivityIndicator size={'large'} animating={true} color={'red'} />
      ) : (
        <FlatList
          style={styles.postList}
          data={posts ? posts : null}
          renderItem={({item}) => {
            return <PostCard title={item.title} cmtCount={item.comments} />;
          }}
        />
      )}

      <Modal
        visible={errorModal}
        onDismiss={() => {
          setErrorModal(false);
        }}
        contentContainerStyle={styles.modalContainer}>
        <Text style={{color: 'red', textAlign: 'center', fontSize: 25}}>
          Unable to Load Data Please try again Later
        </Text>
      </Modal>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: '#FBFBFB'},
  postList: {marginVertical: 10},
  modalContainer: {
    backgroundColor: '#FBFBFB',
    height: '80%',
    width: '80%',
    alignSelf: 'center',
  },
});
