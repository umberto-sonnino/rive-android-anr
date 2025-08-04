import { StyleSheet, View } from 'react-native';
import Rive from 'rive-react-native';
import { Link } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';

// This is the same Rive component from before
function RiveDemo() {
  return (
    <Rive
      url="https://public.rive.app/community/runtime-files/2195-4346-avatar-pack-use-case.riv"
      artboardName="Avatar 1"
      stateMachineName="avatar"
      autoplay={true} // The crucial autoplay flag
      style={{ width: 300, height: 300 }}
    />
  );
}

// This screen just displays the Rive component
export default function RiveScreen() {
  return (
    <View style={styles.container}>
      <RiveDemo />
      <Link href="/" style={styles.link}>
        <ThemedText type="link">Go Back (This will trigger the bug)</ThemedText>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  link: {
    padding: 10,
  }
});
