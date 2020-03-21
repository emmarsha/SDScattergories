import { Injectable } from '@angular/core'


export const lists = [
        {
           title: 'List One',
           categories: [
                'A boy\'s name',
                'A river',
                'An animal',
                'Things that are cold',
                'An Insect',
                'A TV Show',
                'Things that grow',
                'A Fruit',
                'Things that are black',
                'School subjects',
                'Movie titles',
                'Musical Instruments'
           ]
        },
        {
            title: 'List Two',
            categories: [
               'Authors',
               'Bodies of water',
               'Birds',
               'Countries',
               'Cartoon Characters',
               'Holidays',
               'Things that are squares',
               'Things in the USA',
               'Clothing',
               'A relative',
               'Games',
               'Sports Stars'
            ]
         },
         {
            title: 'List Three',
            categories: [
               'School supplies',
               'Things that are hot',
               'Heroes',
               'A girl\'s name',
               'Fears',
               'TV stars',
               'Colors',
               'Types of fish',
               'Types of fruit',
               'States',
               'Sports equipment',
               'Tools'
            ]
         },
         {
            title: 'List Four',
            categories: [
               'Breakfast foods',
               'Gifts',
               'Types of flowers',
               'Ice cream flavors',
               'Types of drinks',
               'Toys',
               'Cities',
               'Things in the kitchen',
               'Things in the ocean',
               'Nicknames',
               'Hobbies',
               'Parts of the body'
            ]
         },
         {
            title: 'List Five',
            categories: [
               'Sandwiches',
               'Intems in a catalog',
               'World leaders/Politicians',
               'School subjects',
               'Excuses for being late',
               'Type of dogs',
               'Things that jump/bounce',
               'Things in a park',
               'Foreign cities',
               'Stones/Gems',
               'Things in an elementary school',
               'Musical Instruments'
            ]
         },
         {
            title: 'List Six',
            categories: [
               'Nicknames',
               'Things in the sky',
               'Pizza toppings',
               'Colleges/Universities',
               'Animals',
               'Things in a bathroom',
               'Things that have spots',
               'Historical figures',
               'Things you\'re afraid of',
               'Terms of endearment',
               'Items in the room',
               'Types of cereal'
            ]
         },
         {
            title: 'List Seven',
            categories: [
               'Fictional characters',
               'Menu items',
               'Magazines',
               'Capitols',
               'Kinds of candy',
               'Items you save up to buy',
               'Footware',
               'Something you keep hidden',
               'Items in a suitcase',
               'Things with tails',
               'Camping equipment',
               'Crimes'
            ]
         },
         {
            title: 'List Eight',
            categories: [
               'Things that are sticky',
               'Awards/Ceremonies',
               'Cars',
               'Spices/Herbs',
               'Bad habits',
               'Cosmetics/Toiletries',
               'Celebrities',
               'Cooking utensils',
               'Reptiles/Amphibians',
               'Parks',
               'Leisure activities',
               'Things you\'re allergic to'
            ]
         },
         {
            title: 'List Nine',
            categories: [
               'Restaurants',
               'Notorious people',
               'Fruits',
               ''
            ]
         },
         {
            title: 'List Ten',
            categories: []
         },
         {
            title: 'List Eleven',
            categories: []
         },
         {
            title: 'List Twelve',
            categories: []
         },
         {
            title: 'List Thirteen',
            categories: []
         },
         {
            title: 'List Fourteen',
            categories: []
         },
         {
            title: 'List Fifteen',
            categories: []
         },
         {
            title: 'List Sixteen',
            categories: []
         },
         {
            title: 'List Seventeen',
            categories: []
         },
         {
            title: 'List Eighteen',
            categories: []
         }
    ];

@Injectable({
   providedIn: 'root'
})
export class ListManagerService {

    getLists() {
        return lists;
    }

    getListCount() {
       return lists.length;
    }
}