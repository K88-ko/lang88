const heroes = [
    {
        name: "Altemüller",
        type: 0,
        history: "拥有利古利亚帝国的王位继承权，同时拥有帝国大军的指挥权，擅长谋略，剑术超群，手下拥有4个善战的将军",
        stats: [335, 55, 27, 28, 30, 40],
        ability: 0,
        classes: [
            {
                name: "Hawk Knight",
                classes: [
                    {
                        name: "Dragon Knight",
                        classes: [
                            {
                                name: "Dragon Master"
                            }
                        ]
                    },
                    {
                        name: "General",
                        classes: [
                            {
                                name: "Marshal"
                            }
                        ]
                    },
                    {
                        name: "Highlander",
                    }
                ]
            }
        ],
        troops: [7, 13, 15, 19, 20, 10, 17, 42, 46, 56, 59],
        skills: [0, 1, 2, 3, 4, 5, 6, 7, 8]
    },
    {
        name: "Cherie",
        type: 0,
        history: "古代卡尔萨斯王国的公主，兰斯和娜姆的后代，同样有着光辉后裔的身份，厌倦无趣的皇室生活，经常溜出王城游历，让老师基斯十分头疼",
        stats: [333, 56, 22, 27, 28, 44],
        ability: 1,
        classes: [
            {
                name: "Hawk Knight",
                classes: [
                    {
                        name: "Dragon Knight",
                        classes: [
                            {
                                name: "Dragon Master"
                            }
                        ]
                    },
                    {
                        name: "Striker",
                        classes: [
                            {
                                name: "High Master"
                            }
                        ]
                    },
                    {
                        name: "Pegasus Lord",
                    }
                ]
            }
        ],
        troops: [7, 21, 18, 19, 17, 22, 23, 56, 49, 61, 65],
        skills: [9, 10, 11, 1, 12, 13, 14, 15, 16]
    },
    {
        name: "Luna",
        type: 0,
        history: "天才军师之女，聪明才智和博闻多识毫不亚于其父托兰多男爵，虽然军师出身，却不是文弱之辈，在战线上是任何敌人都不可小觑的对手。作为军师为拉卡斯复国做出了空前贡献，多次拯救迪哈尔特于险境。",
        stats: [372, 48, 34, 29, 32, 33],
        ability: 2,
        classes: [
            {
                name: "Pegasus Knight",
                classes: [
                    {
                        name: "Bow Knight",
                        classes: [
                            {
                                name: "Bow Master"
                            }
                        ]
                    },
                    {
                        name: "Pegasus Lord",
                        classes: [
                            {
                                name: "Pegasus Master"
                            }
                        ]
                    },
                    {
                        name: "Unicorn Knight",
                    }
                ]
            }
        ],
        troops: [7, 8, 24, 19, 21, 31, 18, 70, 65, 56, 49],
        skills: [0, 17, 18, 19, 20, 21, 3, 22, 7]
    },
    {
        name: "Liana",
        type: 0,
        history: "大陆上能够揭开和封印圣剑的两位光之巫女之一，因古代雷卡尔特帝国的野心险些被利昂掳走而卷入了漫长宏大的战争。一直怀着悲天悯人的心，为了结束一切战争而努力着。",
        stats: [321, 35, 38, 24, 34, 18],
        ability: 3,
        classes: [
            {
                name: "Sister",
                classes: [
                    {
                        name: "Priest",
                        classes: [
                            {
                                name: "Prophet"
                            }
                        ]
                    },
                    {
                        name: "Summoner",
                        classes: [
                            {
                                name: "Hermit"
                            }
                        ]
                    },
                    {
                        name: "Bishop",
                    }
                ]
            }
        ],
        troops: [5, 18, 12, 29, 30, 24, 31],
        skills: [23, 24, 25, 26, 27, 28, 29]
    },
    {
        name: "Leon",
        type: 0,
        history: "光辉后裔之一，传说之人，史上无双的猛将，追随巴恩哈特皇帝的四将军之一，雷卡尔特帝国青龙骑士团团长。待人非常谦逊有礼，内心却极为骄傲，不仅在剑术上造诣极高，同样也具备着一流的智谋，被誉为【大陆最强的骑士】",
        stats: [343, 55, 23, 27, 23, 28],
        ability: 4,
        classes: [
            {
                name: "Knight",
                classes: [
                    {
                        name: "Grand Knight",
                        classes: [
                            {
                                name: "Assault Knight"
                            }
                        ]
                    },
                    {
                        name: "Highlander",
                        classes: [
                            {
                                name: "Royal Knight"
                            }
                        ]
                    },
                    {
                        name: "Swordsman",
                    }
                ]
            }
        ],
        troops: [2, 16, 20, 17, 9, 10, 13, 51, 59, 53, 36],
        skills: [30, 10, 31, 32, 33, 34, 35, 36, 37]
    },
    {
        name: "Ledin",
        type: 0,
        history: "古巴尔迪亚王国的王子，继承光辉之力的末裔，勇气和荣誉感是他的座右铭，当祖国沦陷，雷丁带领伙伴们踏上复国之路，揭开了传奇史诗的序幕。被认大家认可为至死追随的领袖。",
        stats: [384, 47, 26, 30, 24, 34],
        ability: 5,
        classes: [
            {
                name: "Fighter",
                classes: [
                    {
                        name: "Shield Swordsman",
                        classes: [
                            {
                                name: "King"
                            }
                        ]
                    },
                    {
                        name: "Paladin",
                        classes: [
                            {
                                name: "Paladin Master"
                            }
                        ]
                    },
                    {
                        name: "General",
                    }
                ]
            }
        ],
        troops: [0, 14, 17, 30, 32, 10, 13, 77, 79, 35, 42],
        skills: [38, 39, 40, 41, 42, 43, 44, 45, 46]
    }
]
