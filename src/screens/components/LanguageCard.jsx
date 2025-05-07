import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../theme/colors';
import typography from '../theme/typography';

export default function LanguageCard({ name, icon, onPress }) {
    return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    },
    icon: {
    width: 32,
    height: 32,
    marginRight: 12,
    },
    text: {
    fontFamily: typography.fontFamily,
    fontSize: typography.fontSize.md,
    color: colors.text,
    },
});