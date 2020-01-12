const heroes = [
    {
        name: "매튜-기병",
        type: 3,
        stats: [3931, 510, 211, 273, 288, 168],
        ability: 0,
        classes: [
            {
                name: "파이터[공격 9 / 생명 36]",
                classes: [
                    {
                        name: "그랜드 나이트[공격 12 / 생명 48]",
                        classes: [
                            {
                                name: "스트라이크 마스터[공격 25 / 생명 90 / 마방 10]"
                            }
                        ]
                    },
                    {
                        name: "소드맨[생명 80 / 기술 5]",
                        classes: [
                            {
                                name: "히어로[공격 25 /생명 90 / 방어 10]"
                            }
                        ]
                    },
                    {
                        name: "닌자[기술 8 / 공격 7]",
                    }
                ]
            }
        ],
        troops: [31,29,25,56,53,46,50,12,9,10],
        skills: [0,1,7,13,5,2,3,4,6],
        group1: 0,
        group2: 1,
        group3: 12
    },
    {
        name: "매튜-비병",
        type: 3,
        stats: [3931, 510, 211, 273, 288, 168],
        ability: 0,
         classes: [
            {
                name: "파이터[공격 9 / 생명 36]",
                classes: [
                    {
                        name: "드래곤 나이트[기술 8 / 생명 48]",
                        classes: [
                            {
                                name: "드래곤 마스터[공격 25 / 생명 90 / 마방 10]"
                            }
                        ]
                    },
                    {
                        name: "소드맨[생명 80 / 기술 5]",
                        classes: [
                            {
                                name: "히어로[공격 25 /생명 90 / 방어 10]"
                            }
                        ]
                    },
                    {
                        name: "스나이퍼[공격 12 / 생명 48]",
                    }
                ]
            }
        ],
        troops: [31,29,25,53,48,50,60,12,9,10],
        skills: [0,1,8,16,15,2,3,4,14],
        group1: 0,
        group2: 1,
        group3: 12
    },
        {
        name: "매튜-궁병",
        type: 3,
        stats: [3931, 510, 211, 273, 288, 168],
        ability: 0,
         classes: [
            {
                name: "파이터[공격 9 / 생명 36]",
                classes: [
                    {
                        name: "스나이퍼[공격 12 / 생명 48]",
                        classes: [
                            {
                                name: "레인저[공격 25 / 기술 10 / 생명 90]"
                            }
                        ]
                    },
                    {
                        name: "소드맨[생명 80 / 기술 5]",
                        classes: [
                            {
                                name: "히어로[공격 25 /생명 90 / 방어 10]"
                            }
                        ]
                    },
                    {
                        name: "그랜드 나이트[공격 12 / 생명 48]",
                    }
                ]
            }
        ],
        troops: [31,29,25,53,50,12,13,17,9,10],
        skills: [0,1,14,11,9,2,3,4,7],
        group1: 0,
        group2: 1,
        group3: 12
    },
        {
        name: "매튜-암살자",
        type: 3,
        stats: [3931, 510, 211, 273, 288, 168],
        ability: 0,
         classes: [
            {
                name: "파이터[공격 9 / 생명 36]",
                classes: [
                    {
                        name: "닌자[기술 8 / 공격 7]",
                        classes: [
                            {
                                name: "쉐도우[기술 16 / 공격 15 / 생명 90]"
                            }
                        ]
                    },
                    {
                        name: "소드맨[생명 80 / 기술 5]",
                        classes: [
                            {
                                name: "히어로[공격 25 /생명 90 / 방어 10]"
                            }
                        ]
                    },
                    {
                        name: "드래곤 나이트[기술 8 / 생명 48]",
                    }
                ]
            }
        ],
        troops: [31,36,29,25,53,50,12,8,9,10],
        skills: [0,1,6,12,10,2,3,4,8],
        group1: 0,
        group2: 1,
        group3: 12
    },
    {
        name: "아멜다",
        type: 3,
        stats: [343, 55, 23, 27, 23, 28],
        ability: 1,
        classes: [
            {
                name: "시스터",
                classes: [
                    {
                        name: "마터",
                        classes: [
                            {
                                name: "세인트"
                            }
                        ]
                    },
                    {
                        name: "주교",
                        classes: [
                            {
                                name: "오라클"
                            }
                        ]
                    },
                    {
                        name: "프리스트",
                    }
                ]
            }
        ],
        troops: [2, 16, 20, 17, 9, 10, 13, 51, 59, 53, 36],
        skills: [17, 18, 19, 20, 21, 22, 23, 24, 25],
        group1: 0,
        group2: 1,
        group3: 10
    },
    {
        name: "그레니어",
        type: 3,
        stats: [384, 47, 26, 30, 24, 34],
        ability: 2,
        classes: [
            {
                name: "서전트",
                classes: [
                    {
                        name: "제네럴",
                        classes: [
                            {
                                name: "마샬"
                            }
                        ]
                    },
                    {
                        name: "보우 나이트",
                        classes: [
                            {
                                name: "보우 마스터"
                            }
                        ]
                    },
                    {
                        name: "하이랜더",
                    }
                ]
            }
        ],
        troops: [2, 16, 20, 17, 9, 10, 13, 51, 59, 53, 36],
        skills: [26, 27, 28, 29, 30, 31, 32, 33, 7],
        group1: 1,
        group2: 12,
        group3: 12
    },
    {
        name: "아론",
        type: 2,
        stats: [384, 47, 26, 30, 24, 34],
        ability: 3,
        classes: [
            {
                name: "서전트",
                classes: [
                    {
                        name: "제네럴",
                        classes: [
                            {
                                name: "마샬"
                            }
                        ]
                    },
                    {
                        name: "보우 나이트",
                        classes: [
                            {
                                name: "보우 마스터"
                            }
                        ]
                    },
                    {
                        name: "하이랜더",
                    }
                ]
            }
        ],
        troops: [2, 16, 20, 17, 9, 10, 13, 51, 59, 53, 36],
        skills: [26, 27, 28, 29, 30, 31, 32, 33, 7],
        group1: 1,
        group2: 12,
        group3: 12
    },
    {
        name: "안나",
        type: 2,
        stats: [384, 47, 26, 30, 24, 34],
        ability: 4,
        classes: [
            {
                name: "서전트",
                classes: [
                    {
                        name: "제네럴",
                        classes: [
                            {
                                name: "마샬"
                            }
                        ]
                    },
                    {
                        name: "보우 나이트",
                        classes: [
                            {
                                name: "보우 마스터"
                            }
                        ]
                    },
                    {
                        name: "하이랜더",
                    }
                ]
            }
        ],
        troops: [2, 16, 20, 17, 9, 10, 13, 51, 59, 53, 36],
        skills: [26, 27, 28, 29, 30, 31, 32, 33, 7],
        group1: 2,
        group2: 5,
        group3: 12
    },
    {
        name: "디오스",
        type: 2,
        stats: [384, 47, 26, 30, 24, 34],
        ability: 5,
        classes: [
            {
                name: "서전트",
                classes: [
                    {
                        name: "제네럴",
                        classes: [
                            {
                                name: "마샬"
                            }
                        ]
                    },
                    {
                        name: "보우 나이트",
                        classes: [
                            {
                                name: "보우 마스터"
                            }
                        ]
                    },
                    {
                        name: "하이랜더",
                    }
                ]
            }
        ],
        troops: [2, 16, 20, 17, 9, 10, 13, 51, 59, 53, 36],
        skills: [26, 27, 28, 29, 30, 31, 32, 33, 7],
        group1: 2,
        group2: 5,
        group3: 12
    },
    {
        name: "키스",
        type: 2,
        stats: [384, 47, 26, 30, 24, 34],
        ability: 6,
        classes: [
            {
                name: "서전트",
                classes: [
                    {
                        name: "제네럴",
                        classes: [
                            {
                                name: "마샬"
                            }
                        ]
                    },
                    {
                        name: "보우 나이트",
                        classes: [
                            {
                                name: "보우 마스터"
                            }
                        ]
                    },
                    {
                        name: "하이랜더",
                    }
                ]
            }
        ],
        troops: [2, 16, 20, 17, 9, 10, 13, 51, 59, 53, 36],
        skills: [26, 27, 28, 29, 30, 31, 32, 33, 7],
        group1: 1,
        group2: 12,
        group3: 12
    },
    {
        name: "제시카",
        type: 2,
        stats: [384, 47, 26, 30, 24, 34],
        ability: 7,
        classes: [
            {
                name: "서전트",
                classes: [
                    {
                        name: "제네럴",
                        classes: [
                            {
                                name: "마샬"
                            }
                        ]
                    },
                    {
                        name: "보우 나이트",
                        classes: [
                            {
                                name: "보우 마스터"
                            }
                        ]
                    },
                    {
                        name: "하이랜더",
                    }
                ]
            }
        ],
        troops: [2, 16, 20, 17, 9, 10, 13, 51, 59, 53, 36],
        skills: [26, 27, 28, 29, 30, 31, 32, 33, 7],
        group1: 1,
        group2: 3,
        group3: 10
    },
    {
        name: "스코트",
        type: 2,
        stats: [384, 47, 26, 30, 24, 34],
        ability: 8,
        classes: [
            {
                name: "서전트",
                classes: [
                    {
                        name: "제네럴",
                        classes: [
                            {
                                name: "마샬"
                            }
                        ]
                    },
                    {
                        name: "보우 나이트",
                        classes: [
                            {
                                name: "보우 마스터"
                            }
                        ]
                    },
                    {
                        name: "하이랜더",
                    }
                ]
            }
        ],
        troops: [2, 16, 20, 17, 9, 10, 13, 51, 59, 53, 36],
        skills: [26, 27, 28, 29, 30, 31, 32, 33, 7],
        group1: 1,
        group2: 6,
        group3: 12
    },
    {
        name: "로우가",
        type: 2,
        stats: [384, 47, 26, 30, 24, 34],
        ability: 9,
        classes: [
            {
                name: "서전트",
                classes: [
                    {
                        name: "제네럴",
                        classes: [
                            {
                                name: "마샬"
                            }
                        ]
                    },
                    {
                        name: "보우 나이트",
                        classes: [
                            {
                                name: "보우 마스터"
                            }
                        ]
                    },
                    {
                        name: "하이랜더",
                    }
                ]
            }
        ],
        troops: [2, 16, 20, 17, 9, 10, 13, 51, 59, 53, 36],
        skills: [26, 27, 28, 29, 30, 31, 32, 33, 7],
        group1: 2,
        group2: 8,
        group3: 12
    },
    {
        name: "루인",
        type: 2,
        stats: [384, 47, 26, 30, 24, 34],
        ability: 10,
        classes: [
            {
                name: "서전트",
                classes: [
                    {
                        name: "제네럴",
                        classes: [
                            {
                                name: "마샬"
                            }
                        ]
                    },
                    {
                        name: "보우 나이트",
                        classes: [
                            {
                                name: "보우 마스터"
                            }
                        ]
                    },
                    {
                        name: "하이랜더",
                    }
                ]
            }
        ],
        troops: [2, 16, 20, 17, 9, 10, 13, 51, 59, 53, 36],
        skills: [26, 27, 28, 29, 30, 31, 32, 33, 7],
        group1: 3,
        group2: 12,
        group3: 12
    },
    {
        name: "레아드",
        type: 2,
        stats: [384, 47, 26, 30, 24, 34],
        ability: 11,
        classes: [
            {
                name: "서전트",
                classes: [
                    {
                        name: "제네럴",
                        classes: [
                            {
                                name: "마샬"
                            }
                        ]
                    },
                    {
                        name: "보우 나이트",
                        classes: [
                            {
                                name: "보우 마스터"
                            }
                        ]
                    },
                    {
                        name: "하이랜더",
                    }
                ]
            }
        ],
        troops: [2, 16, 20, 17, 9, 10, 13, 51, 59, 53, 36],
        skills: [26, 27, 28, 29, 30, 31, 32, 33, 7],
        group1: 2,
        group2: 8,
        group3: 12
    },
    {
        name: "피엘",
        type: 2,
        stats: [384, 47, 26, 30, 24, 34],
        ability: 12,
        classes: [
            {
                name: "서전트",
                classes: [
                    {
                        name: "제네럴",
                        classes: [
                            {
                                name: "마샬"
                            }
                        ]
                    },
                    {
                        name: "보우 나이트",
                        classes: [
                            {
                                name: "보우 마스터"
                            }
                        ]
                    },
                    {
                        name: "하이랜더",
                    }
                ]
            }
        ],
        troops: [2, 16, 20, 17, 9, 10, 13, 51, 59, 53, 36],
        skills: [26, 27, 28, 29, 30, 31, 32, 33, 7],
        group1: 3,
        group2: 8,
        group3: 12
    },
    {
        name: "레티시아",
        type: 2,
        stats: [384, 47, 26, 30, 24, 34],
        ability: 13,
        classes: [
            {
                name: "서전트",
                classes: [
                    {
                        name: "제네럴",
                        classes: [
                            {
                                name: "마샬"
                            }
                        ]
                    },
                    {
                        name: "보우 나이트",
                        classes: [
                            {
                                name: "보우 마스터"
                            }
                        ]
                    },
                    {
                        name: "하이랜더",
                    }
                ]
            }
        ],
        troops: [2, 16, 20, 17, 9, 10, 13, 51, 59, 53, 36],
        skills: [26, 27, 28, 29, 30, 31, 32, 33, 7],
        group1: 2,
        group2: 6,
        group3: 12
    },
    {
        name: "레스터",
        type: 2,
        stats: [384, 47, 26, 30, 24, 34],
        ability: 14,
        classes: [
            {
                name: "서전트",
                classes: [
                    {
                        name: "제네럴",
                        classes: [
                            {
                                name: "마샬"
                            }
                        ]
                    },
                    {
                        name: "보우 나이트",
                        classes: [
                            {
                                name: "보우 마스터"
                            }
                        ]
                    },
                    {
                        name: "하이랜더",
                    }
                ]
            }
        ],
        troops: [2, 16, 20, 17, 9, 10, 13, 51, 59, 53, 36],
        skills: [26, 27, 28, 29, 30, 31, 32, 33, 7],
        group1: 1,
        group2: 8,
        group3: 12
    }
]
