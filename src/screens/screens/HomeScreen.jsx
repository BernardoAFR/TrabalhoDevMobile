import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../theme/colors';
import typography from '../theme/typography';

const numColumns = 3;
const screenWidth = Dimensions.get('window').width;

export default function HomeScreen() {
  const [languages, setLanguages] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const list = [
      { id: 'c', name: 'C', icon: require('../../../assets/icons/c.png') },
      { id: 'cpp', name: 'C++', icon: require('../../../assets/icons/cpp.png') },
      { id: 'csharp', name: 'C#', icon: require('../../../assets/icons/csharp.png') },
      { id: 'Java', name: 'Java', icon: require('../../../assets/icons/java.png') },
      { id: 'JavaScript', name: 'JavaScript', icon: require('../../../assets/icons/JS.png') },
      { id: 'Python', name: 'Python', icon: require('../../../assets/icons/python.png') },
      { id: 'Ruby', name: 'Ruby', icon: require('../../../assets/icons/Ruby.png') },
      { id: 'Go', name: 'Go', icon: require('../../../assets/icons/Go.png') },
      { id: 'Rust', name: 'Rust', icon: require('../../../assets/icons/Rust.png') },
      { id: 'Lua', name: 'Lua', icon: require('../../../assets/icons/Lua.png') },
    ];
    setLanguages(list);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={languages}
        keyExtractor={item => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.flatListContent}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push({ pathname: `/detail/${item.id}`, params: { name: item.name } })}
          >
            <Image source={item.icon} style={styles.icon} />
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
    margin: 10,
    padding: 16,
    borderRadius: 12,
    width: screenWidth / numColumns - 24,
  },
  icon: {
    width: 48,
    height: 48,
    marginBottom: 8,
    resizeMode: 'contain',
  },
  text: {
    color: colors.text,
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize.md,
    textAlign: 'center',
  },
});
