// @flow
import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';

export interface Card {
  id: string;
  category: 'Topical' | 'Philosophical' | 'Political';
  intensity: number;
  question1: string;
  question2?: string;
  question3?: string;
  question4?: string;
  question5?: string;
  card: number;
}

const styles = StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderRadius: 8,
    // transform: [{ rotate: '90deg' }],
  },
  overlay: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    flexDirection: 'row',
  },
  name: {
    color: 'white',
    fontSize: 32,
  },
  like: {
    borderWidth: 4,
    borderRadius: 5,
    padding: 8,
    borderColor: '#6ee3b4',
  },
  likeLabel: {
    fontSize: 32,
    color: '#6ee3b4',
    fontWeight: 'bold',
  },
  nope: {
    borderWidth: 4,
    borderRadius: 5,
    padding: 8,
    borderColor: '#ec5288',
  },
  nopeLabel: {
    fontSize: 32,
    color: '#ec5288',
    fontWeight: 'bold',
  },
});

interface CardProps {
  card: Card;
  likeOpacity?: Animated.Node<number>;
  nopeOpacity?: Animated.Node<number>;
}

const Profile = (props: CardProps) => {
  const { card, likeOpacity, nopeOpacity } = {
    likeOpacity: 0,
    nopeOpacity: 0,
    ...props,
  };
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        { backgroundColor: '#E76255', borderRadius: 10 },
      ]}>
      <Image style={styles.image} source={card.profile} resizeMode="contain" />
      <View style={styles.overlay}>
        <View style={styles.header}>
          {/* <Animated.View style={[styles.like, { opacity: likeOpacity }]}>
            <Text style={styles.likeLabel}>LIKE</Text>
          </Animated.View>
          <Animated.View style={[styles.nope, { opacity: nopeOpacity }]}>
            <Text style={styles.nopeLabel}>NOPE</Text>
          </Animated.View> */}
        </View>
        {/* <View style={styles.footer}>
          <Text style={styles.name}>{profile.name}</Text>
        </View> */}
      </View>
    </View>
  );
};

export default Profile;