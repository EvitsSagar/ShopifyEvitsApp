import * as React from 'react';
import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { Image } from 'react-native';
import { imagesObj } from '../Store/Redusers/Product/type.p';




interface data{
  CarouselData:imagesObj[];
}

export function ProductCarousel({CarouselData}:data) {
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
                            borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Image
                            onLoad={() => true}
                            source={{uri:item.src}}
                            style={{ width: width, height: width / 2}}
                            resizeMode='contain'
                        />
                    </View>
                )}
            />
        </View>
    );
}
