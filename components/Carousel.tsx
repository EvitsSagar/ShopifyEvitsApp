import * as React from 'react';
import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { Image } from 'react-native';
import { Card } from 'react-native-paper';




interface data{
  CarouselData:string[];
}

export function CustomCarousel({CarouselData}:data) {
    const width = Dimensions.get('window').width;
    return (
        <View style={{ flex: 1 }}>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={CarouselData}
                scrollAnimationDuration={1000}
                // onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index, item }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 0,
                            justifyContent: 'center',
                        }}
                    >
                        <Card.Cover
                        source={{uri:item}}
                        />
                    </View>
                )}
            />
        </View>
    );
}
