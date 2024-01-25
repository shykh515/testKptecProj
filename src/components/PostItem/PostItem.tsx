import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CIcon} from '..';

interface Post {
  id: number;
  username: string;
  image: string;
  thumbnail: string;
  reactions: number;
  comments: number;
  title: string;
  body: string;
}

interface PostItemProps {
  post: Post;
  onPressLike: () => void;
}

const PostItem: React.FC<PostItemProps> = ({
  post,
  onPressLike,
}) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(post?.reactions);

  const handleLike = () => {
    if (!isLiked) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }
    setIsLiked(!isLiked);
  };
  return (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image
          source={{
            uri: 'https://dummyimage.com/800x430/96479e/massa-fermentum.png&text=jsonplaceholder.org',
          }}
          style={styles.avatar}
        />
        <Text style={styles.username}>{post.title || 'UserName'}</Text>
      </View>
      <Image
        source={{
          uri: 'https://dummyimage.com/800x430/96479e/massa-fermentum.png&text=jsonplaceholder.org',
        }}
        style={styles.postImage}
      />
      <Text style={styles.postTitle}>{post.body}</Text>
      <View style={styles.postActions}>
        <TouchableOpacity onPress={handleLike} style={styles.iconContainer}>
          <CIcon type="AntDesign" color="red" size={20} name={isLiked ? "heart" : "hearto"} />
          <Text style={styles.likes}>{`${likeCount || 0} likes`}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconContainer2}>
          <CIcon type="FontAwesome" color="#cccccc" size={20} name="comment" />
          <Text style={styles.comments}>{`${
            post.comments || 0
          } comments`}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#fcfcfc',
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
    flex: 1,
    padding: 5,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postTitle: {
    fontSize: 13,
    padding: 10,
  },
  postImage: {
    width: '97%',
    height: 250,
    alignSelf: 'center',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingLeft: 20,
  },
  postStats: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  likes: {
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  comments: {
    color: 'gray',
    paddingLeft: 10,
  },
});

export default PostItem;
