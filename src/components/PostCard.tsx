import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Card, Title, Paragraph} from 'react-native-paper';

type props = {
  title: string;
  cmtCount: string | number;
};

const PostCard: React.FC<props> = props => {
  return (
    <Card style={styles.container}>
      <Card.Content>
        <Title>{props.title}</Title>
        <Paragraph style={styles.count}>
          comment Count :{props.cmtCount}
        </Paragraph>
      </Card.Content>
    </Card>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    borderRadius: 10,
    padding: 10,
  },
  postTitle: {
    color: '#000',
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 10,
  },
  count: {
    fontSize: 16,
    alignSelf: 'flex-end',
    marginTop: 20,
  },
});
