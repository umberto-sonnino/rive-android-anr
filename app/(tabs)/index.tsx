// app/(tabs)/index.tsx

import { StyleSheet, View } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.main}>
        <ThemedText type="title">Rive ANR Reproduction</ThemedText>
        <ThemedText>
          The button below will navigate to a new screen that mounts a Rive component with autoplay enabled.
        </ThemedText>
        <ThemedText>
          Using the "Back" button on that screen will unmount the component and trigger `onDropViewInstance`, which should cause the ANR.
        </ThemedText>
        <Link href="/rive" style={styles.link}>
          <ThemedText type="link">Navigate to Rive Screen</ThemedText>
        </Link>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    gap: 16,
  },
  link: {
    paddingVertical: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#0a7ea4',
    borderRadius: 8,
    textAlign: 'center',
  }
});
