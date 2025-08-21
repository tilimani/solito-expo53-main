import { StyleSheet } from 'react-native-unistyles'
import { View, Text, ImageBackground, Pressable, ScrollView } from 'react-native'

const ACCENT = '#9d5f4a'

const TestComponent = () => {
  return (
    <ScrollView contentContainerStyle={styles.page}>
      <View style={styles.hero}>
        <Text style={styles.kicker}>Art Collections Sales Design</Text>
        <Text style={styles.title}>
          Where every piece tells a story and every{` `}
          <Text style={styles.titleBreak}>corner reflects your </Text>
          <Text style={styles.highlight}>unique style</Text>
        </Text>
        <Text style={styles.subtitle}>
          Explore our extensive collection of furniture and home decor that harmoniously blend
          aesthetics with functionality. From timeless classics to the latest trends, each piece is
          thoughtfully selected to elevate your home and express your individuality.
        </Text>
        <Pressable style={styles.cta} accessibilityRole="button">
          <Text style={styles.ctaLabel}>Explore collection</Text>
        </Pressable>
      </View>

      <View style={styles.grid}>
        <Card
          title="Furniture"
          imageUrl="https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?q=80&w=1600&auto=format&fit=crop"
        />
        <Card
          title="Open space"
          imageUrl="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop"
        />
        <Card
          title="Interior"
          imageUrl="https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1600&auto=format&fit=crop"
        />
      </View>
    </ScrollView>
  )
}

type CardProps = { title: string; imageUrl: string }

const Card = ({ title, imageUrl }: CardProps) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{ uri: imageUrl }}
        style={styles.cardImage}
        imageStyle={styles.cardImageRadius}
      >
        <Pressable style={styles.cardIcon} accessibilityLabel={`Open ${title}`}>
          <Text style={styles.cardIconArrow}>↗</Text>
        </Pressable>
        <View style={styles.cardOverlay} />
        <Text style={styles.cardTitle}>{title}</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create((theme, rt) => {
  const isMdUp = rt.breakpoint === 'md' || rt.breakpoint === 'lg' || rt.breakpoint === 'xl'
  const horizontalPadding = isMdUp ? 32 : 16

  return {
    page: {
      paddingHorizontal: horizontalPadding,
      paddingTop: isMdUp ? 48 : 32,
      paddingBottom: 32,
      gap: theme?.gap ? theme.gap(4) : 24,
      backgroundColor: '#fff',
    },

    hero: {
      alignItems: 'center',
      gap: 16,
      backgroundColor: {
        md: 'red',
        lg: 'blue',
      },
    },

    kicker: {
      color: '#6b6b6b',
      letterSpacing: 1,
      textTransform: 'uppercase',
      fontSize: 12,
    },

    title: {
      textAlign: 'center',
      fontSize: {
        xs: 28,
        md: 38,
        lg: 46,
      },
      lineHeight: isMdUp ? 46 : 34,
      color: '#1a1a1a',
      fontWeight: '700',
      fontFamily: 'Georgia',
    },

    titleBreak: {
      fontFamily: 'Georgia',
    },

    highlight: {
      color: ACCENT,
      fontStyle: 'italic',
      fontFamily: 'Georgia',
    },

    subtitle: {
      textAlign: 'center',
      color: '#666',
      fontSize: 14,
      lineHeight: 20,
      maxWidth: 720,
    },

    cta: {
      backgroundColor: ACCENT,
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderRadius: 24,
      marginTop: 8,
    },

    ctaLabel: {
      color: 'white',
      fontWeight: '600',
      fontSize: 14,
    },

    grid: {
      display: 'flex',
      flexDirection: {
        md: 'row',
        lg: 'column',
      },
      gap: theme?.gap ? theme.gap(2) : 16,
    },

    card: {
      flex: 1,
      height: {
        md: 220,
        lg: 180,
      },
      borderRadius: 12,

      overflow: 'hidden',
    },

    cardImage: {
      flex: 1,
      justifyContent: 'flex-end',
    },

    cardImageRadius: {
      borderRadius: 12,
    },

    cardOverlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0,0,0,0.18)',
    },

    cardTitle: {
      position: 'absolute',
      left: 16,
      bottom: 14,
      color: 'white',
      fontSize: 18,
      fontWeight: '500',
    },

    cardIcon: {
      position: 'absolute',
      top: 12,
      right: 12,
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: 'rgba(255,255,255,0.9)',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2,
    },

    cardIconArrow: {
      color: '#111',
      fontSize: 16,
      fontWeight: '700',
    },
  }
})

export default TestComponent
