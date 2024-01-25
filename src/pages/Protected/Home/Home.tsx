import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  NewPostSliceState,
  addPost,
  setPosts,
} from '../../../redux/Slices/NewPostSlice';
import { get, post } from '../../../utils/methods';
import {GET_POST} from '../../../utils/config'
import { PostItem } from '../../../components';
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const {posts} = useSelector((state) =>  state?.NewPostSlice);
  const [visiblePosts, setVisiblePosts] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(1); // Assuming you start with page 1
  const itemsPerPage: number = 10; // Adj
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(0);

  console.log('posts :>> ', posts.posts);

  useEffect(() => {
    handleFetchPosts();
  }, []);

  const updateVisiblePosts = () => {
    if (posts.posts) {
      const startIndex: number = (page - 1) * itemsPerPage;
      const endIndex: number = startIndex + itemsPerPage;
      const postsToDisplay: Post[] = (posts.posts).slice(startIndex, endIndex);
      setVisiblePosts((prevVisiblePosts) => [...prevVisiblePosts, ...postsToDisplay]);
  }
};

  const fetchMoreData = () => {
    // Fetch more data when end is reached
    setPage(page + 1);
    updateVisiblePosts();
  };
  

  const handleFetchPosts = async () => {
    // Simulate fetching posts from an API
    try {
    const data = await get(GET_POST)
    dispatch(setPosts(data?.data));

    } catch (error) {
      console.log('error :>> zzz', error);
      
    }


  };

  const handleLike = () => {
    if (!isLiked) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Posts</Text>
      <FlatList
        data={posts.posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PostItem post={item}  onPressLike={handleLike} />}
        onEndReached={()=>fetchMoreData()}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  postContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  postBody: {
    fontSize: 16,
  },
});

export default Home;
