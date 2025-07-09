import { icons } from '@/constants/icons'; // assume icons.heart and icons.heartFilled exist
import { addToFavorite } from '@/services/api';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface MovieCardProps extends Movie {
    showAddFav?: boolean;
}

const MovieCard = ({ id, poster_path, title, vote_average, release_date,showAddFav=false }: MovieCardProps) => {
    const [isFavorite, setIsFavorite] = useState(false);


    const toggleFavorite = async () => {
        setIsFavorite(!isFavorite);
        await addToFavorite(id,!isFavorite)
        // await fetchFavoriteMovies()
    };

    return (
        <Link href={`/movies/${id}`} asChild>
            <TouchableOpacity className='w-[30%]'>
                <View className="relative">
                    <Image
                        source={{
                            uri: poster_path
                                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                                : 'https://placehold.co/600x400/1a1a1a/ffffff.png',
                        }}
                        className='w-full h-52 rounded-lg'
                        resizeMode='cover'
                    />
                    {
                        showAddFav &&
                        <TouchableOpacity
                            onPress={toggleFavorite}
                            className="absolute top-2 right-2 z-10 p-1 bg-white rounded-full"
                        >
                            <Image
                                source={isFavorite ? icons.heartFilled : icons.heart}
                                className="w-5 h-5"
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    }
                </View>

                <Text className="text-sm font-bold text-white mt-1" numberOfLines={1}>{title}</Text>

                <View className='flex-row items-center justify-start gap-x-1'>
                    <Image source={icons.star} className='size-4' />
                    <Text className='text-xs text-white font-bold uppercase'>{Math.round(vote_average / 2)}</Text>
                </View>

                <View className='flex-row items-center justify-between'>
                    <Text className='text-xs text-light-300 font-medium mt-1'>
                        {release_date?.split('-')[0]}
                    </Text>
                </View>
            </TouchableOpacity>
        </Link>
    );
};

export default MovieCard;

const styles = StyleSheet.create({});
