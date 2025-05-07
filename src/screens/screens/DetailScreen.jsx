import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { fetchLanguageDetails } from '../services/languageService';
import colors from '../theme/colors';
import typography from '../theme/typography';

import { useLocalSearchParams } from 'expo-router';

export default function DetailScreen() {
  const { id, name } = useLocalSearchParams();
  const [details, setDetails] = useState(null);
  const { width } = useWindowDimensions();

  useEffect(() => {
    async function load() {
      const data = await fetchLanguageDetails(id);
      setDetails(data);
    }
    load();
  }, [id]);

  if (!details) {
    return <Text style={styles.loading}>Carregando...</Text>;
  }

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { paddingHorizontal: width > 600 ? (width - 600) / 2 : 16 },
      ]}
    >
      <Text style={[styles.heading, { color: colors.primary }]}>{name}</Text>
      <InfoCard title="Ano de criação" content={details.year} />
      <InfoCard title="Criadores" content={details.creators} />
      <InfoCard title="Paradigmas" content={details.paradigms.join(', ')} />
      <InfoCard title="Principais usos" content={details.uses} />
      <InfoCard title="História" content={details.history} />
      <InfoCard title="O que foi criado com ela" content={details.creations} />
      <InfoCard title="Curiosidades" content={details.curiosities} />
    </ScrollView>
  );
}

function InfoCard({ title, content }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardContent}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    textAlign: 'center',
    marginTop: 20,
    color: colors.text,
    fontSize: typography.fontSize.md,
  },
  container: {
    paddingVertical: 16,
    backgroundColor: colors.background,
  },
  heading: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: colors.secondary,
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.bold,
    color: '#000',
    marginBottom: 4,
  },
  cardContent: {
    fontSize: typography.fontSize.sm,
    color: colors.text,
    lineHeight: typography.fontSize.md + 4,
  },
});