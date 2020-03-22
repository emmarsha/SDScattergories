import { Injectable } from '@angular/core'


export const lists = [
        {
           title: 'List 1',
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
            title: 'List 2',
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
            title: 'List 3',
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
            title: 'List 4',
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
            title: 'List 5',
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
            title: 'List 6',
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
            title: 'List 7',
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
            title: 'List 8',
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
            title: 'List 9',
            categories: [
               'Restaurants',
               'Notorious people',
               'Fruits',
               'Things in a medicine cabinent',
               'Toys',
               'Household chores',
               'Bodies of water',
               'Authors',
               'Halloween costumes',
               'Weapons',
               'Things that are round',
               'Words associated with execise'
            ]
         },
         {
            title: 'List 10',
            categories: [
               'Sports',
               'Song titles',
               'Parts of the body',
               'Ethnic foods',
               'Things you shout',
               'Birds',
               'Words associated with money',
               'Ways to get from here to there',
               'Items in your car',
               'Villians',
               'Types of trees',
               'Things you replace'
            ]
         },
         {
            title: 'List 11',
            categories: [
               'Baby foods',
               'Famous duos and trios',
               'Things found in a desk',
               'Vacation spots',
               'Diseases',
               'Words associated with work',
               'Items in a vending machine',
               'Movie titles',
               'Games',
               'Things you wear',
               'Beers',
               'Things at a circus'
            ]
         },
         {
            title: 'List 12',
            categories: [
               'Vegetables',
               'States',
               'Things you throw away',
               'Occupations',
               'Appliances',
               'Cartoon characters',
               'Types of drinks',
               'Musical groups',
               'Store names',
               'Articles of clothing',
               'Personality traits',
               'Colors'
            ]
         },
         // {
         //    title: 'List Thirteen',
         //    categories: [
         //       'Video games',
         //       'Electronic gadgets',
         //       'Board games',
         //       'Things that use a remote',
         //       'Card games',
         //       'Internet lingo',
         //       '',
         //       'Historical events',
         //       ''
         //    ]
         // },
         {
            title: 'List 13',
            categories: [
               'Things at the grocery store',
               'Reasons to quit your job',
               'Things that have stripes',
               'Tourist attractions',
               'Diet foods',
               'Things found at the hospital',
               'Food/Drink that is green',
               'Weekend activities',
               'Acronyms',
               'Seafood',
               'Christmas songs',
               'Words ending with "-ly"'
            ]
         },
         {
            title: 'List 14',
            categories: [
               'Words with double letters',
               'Children\'s books',
               'Things found at a bar',
               'Hobbies',
               'Names used in songs',
               'Food you can eat raw',
               'Places in Europe',
               'Olympic events',
               'Things you see at the zoo',
               'Math terms',
               'Movies',
               'Things to do at a party'
            ]
         },
         {
            title: 'List 15',
            categories: [
               'Kinds of soup',
               'Things found in New York',
               'Things you get tickets to',
               'Things you do at work',
               'Four letter words',
               'Things you wouldn\'t touch',
               'Spciy foods',
               'Things at a wedding',
               'Things you make',
               'Places to hang out',
               'Animal noises',
               'Computer programs'
            ]
         },
         {
            title: 'List 16',
            categories: [
               'Reasons to make a phone call',
               'Types of weather',
               'Titles people have',
               'Things that have buttons',
               'Items you take on a road trip',
               'Things that have wheels',
               'Things that make people smile',
               'Things that kill time',
               'Holiday Activities',
               'Fairy tale characters',
               'Things that can get you fired',
               'Things you get in the mail'
            ]
         },
         // {
         //    title: 'List Eighteen',
         //    categories: []
         // }
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