import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import DetailScreen from '../../src/screens/screens/DetailScreen';

export default function Detail() {
  const { id, name } = useLocalSearchParams();
  const router = useRouter();

  return <DetailScreen route={{ params: { id, name } }} navigation={router} />;
}