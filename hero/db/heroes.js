const heroes = [
    {
        name: "매튜-기병",
        type: 3,
        stats: ["히어로 : 버프5개이상일경우 전투시 받는피해-10%","히어로 : 버프5개이상일경우 전투시 입히는피해+10%", 
                "스트라이크 마스터 : 공격하여 전투진입시 받는피해감소 -10%", "스트라이크 마스터 : 공격 받아 전투 진입시 입히는피해 +10%",
                "생명 +750, 방어 +50, 마방 +50",
                "호감도 총합 32", "호감도 총합 52","호감도 총합 72","호감도 총합 92","15%","35%","30%","15%"],
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
        stats: ["히어로 : 버프5개이상일경우 전투시 받는피해-10%","히어로 : 버프5개이상일경우 전투시 입히는피해+10%", 
                "드래곤 마스터 : 공격하여 전투진입시 받는피해감소 -10%", "드래곤 마스터 : 공격 받아 전투 진입시 입히는피해 +10%", 
                "생명 +750, 방어 +50, 마방 +50",
                "호감도 총합 32", "호감도 총합 52","호감도 총합 72","호감도 총합 92","15%","35%","30%","15%"],
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
        stats: ["히어로 : 버프5개이상일경우 전투시 받는피해-10%","히어로 : 버프5개이상일경우 전투시 입히는피해+10%", 
                "레인저 : 공격하여 전투진입시 받는피해감소 -10%", "레인저 : 공격 받아 전투 진입시 입히는피해 +10%", 
                "생명 +750, 방어 +50, 마방 +50",
                "호감도 총합 32","호감도 총합 52","호감도 총합 72","호감도 총합 92","15%","35%","30%","15%"],
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
        stats: ["히어로 : 버프5개이상일경우 전투시 받는피해-10%","히어로 : 버프5개이상일경우 전투시 입히는피해+10%", 
                "쉐도우 : 공격하여 전투진입시 받는피해감소 -10%", "쉐도우 : 공격 받아 전투 진입시 입히는피해 +10%", 
                "생명 +750, 방어 +50, 마방 +50",
                "호감도 총합 32","호감도 총합 52","호감도 총합 72","호감도 총합 92","15%","35%","30%","15%"],
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
        troops: [0,1,7,15,17,44,58],
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
        troops: [16,21,23,24,25,31,32],
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
        troops: [23,25,58,60],
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
        troops: [0,1,22,26,62],
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
        troops: [14,18,40,60],
        skills: [26, 27, 28, 29, 30, 31, 32, 33, 7],
        group1: 3,
        group2: 6,
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
        troops: [25,27,47,48,49],
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
        troops: [11,17,43,44,45],
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
        troops: [48,51,54,58,60],
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
        troops: [8,9,10,15,16,17],
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
        troops: [24,25,31,34,39],
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
        troops: [48,51,52,62],
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
        troops: [21,23,38,41,42],
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
        troops: [18,49,52,59,62],
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
        troops: [28,38,39,41,42],
        skills: [26, 27, 28, 29, 30, 31, 32, 33, 7],
        group1: 1,
        group2: 8,
        group3: 12
    },
    {
        name: "소피아",
        type: 1,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 15,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [0,2,3,4,17,44],
        skills: [0],
        group1: 3,
        group2: 5,
        group3: 10
    },
    {
        name: "페라키아",
        type: 1,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 16,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [7,8,13,40,43,62,64],
        skills: [0],
        group1: 4,
        group2: 8,
        group3: 12
    },
    {
        name: "프레아",
        type: 1,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 17,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [4,23,25,30,33,35,58,60],
        skills: [0],
        group1: 3,
        group2: 5,
        group3: 12
    },
    {
        name: "발가스",
        type: 1,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 18,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [20,22,26,32,35,36,55],
        skills: [0],
        group1: 2,
        group2: 6,
        group3: 12
    },
    {
        name: "파나",
        type: 1,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 19,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [13,15,18,33,46,48,51],
        skills: [0],
        group1: 2,
        group2: 4,
        group3: 12
    },
    {
        name: "나암",
        type: 1,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 20,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [15,16,17,18,47,50,60],
        skills: [0],
        group1: 1,
        group2: 5,
        group3: 8
    },
    {
        name: "크리스",
        type: 1,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 21,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [0,3,4,17,24,29,30,31],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 5
    },
    {
        name: "키리카제",
        type: 1,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 22,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [6,8,13,25,28,31,55],
        skills: [0],
        group1: 3,
        group2: 8,
        group3: 12
    },
    {
        name: "실버울프",
        type: 1,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 23,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [6,7,8,11,13,17,18],
        skills: [0],
        group1: 3,
        group2: 8,
        group3: 12
    },
    {
        name: "소니아",
        type: 1,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 24,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [13,18,46,53,56,59,63,65],
        skills: [0],
        group1: 2,
        group2: 4,
        group3: 5
    },
    {
        name: "에마링크",
        type: 1,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 25,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [20,36,48,50,51,52,62],
        skills: [0],
        group1: 2,
        group2: 6,
        group3: 12
    },
    {
        name: "이멜다",
        type: 1,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 26,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [0,5,12,13,14,18,44],
        skills: [0],
        group1: 2,
        group2: 6,
        group3: 12
    },
    {
        name: "리파니",
        type: 1,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 27,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [13,14,15,17,35,43,44],
        skills: [0],
        group1: 3,
        group2: 5,
        group3: 12
    },
    {
        name: "에그베르트",
        type: 1,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 28,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [11,13,35,44,62,64,65],
        skills: [0],
        group1: 2,
        group2: 6,
        group3: 4
    },
    {
        name: "헤인",
        type: 1,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 29,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [0,2,12,14,17,44],
        skills: [0],
        group1: 1,
        group2: 2,
        group3: 12
    },
    {
        name: "란스",
        type: 1,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 30,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [20,47,48,52,55,59,60],
        skills: [0],
        group1: 2,
        group2: 6,
        group3: 1
    },
    {
        name: "올리비에",
        type: 1,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 31,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [7,15,17,34,43,50],
        skills: [0],
        group1: 2,
        group2: 6,
        group3: 9
    },
    {
        name: "클로제",
        type: 1,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 32,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [3,4,25,29,31,42],
        skills: [0],
        group1: 5,
        group2: 7,
        group3: 9
    },
    {
        name: "아이리스",
        type: 1,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 33,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [0,5,16,18,43,44],
        skills: [0],
        group1: 2,
        group2: 5,
        group3: 9
    },
    {
        name: "세레나",
        type: 1,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 34,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [3,4,24,27,31,57,60],
        skills: [0],
        group1: 7,
        group2: 6,
        group3: 12
    },
    {
        name: "안젤리카",
        type: 1,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 35,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [7,23,26,44,45],
        skills: [0],
        group1: 1,
        group2: 9,
        group3: 12
    },
    {
        name: "카즈마",
        type: 1,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 36,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [20,23,31,34,35,60],
        skills: [0],
        group1: 1,
        group2: 8,
        group3: 9
    },
    {
        name: "알프레드",
        type: 1,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 37,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [29,38,42,52,58],
        skills: [0],
        group1: 8,
        group2: 7,
        group3: 12
    },
    {
        name: "판",
        type: 1,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 38,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [28,29,31,48,49,57,60],
        skills: [0],
        group1: 0,
        group2: 3,
        group3: 9
    },
    {
        name: "필로테스",
        type: 1,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 39,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [7,9,13,40,62,64],
        skills: [0],
        group1: 4,
        group2: 8,
        group3: 9
    },
    {
        name: "올리보",
        type: 1,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 40,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [8,10,17,18,40,57,59],
        skills: [0],
        group1: 8,
        group2: 7,
        group3: 1
    },
    {
        name: "보젤",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 41,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [11,13,22,43,44,45,62,64],
        skills: [0],
        group1: 4,
        group2: 10,
        group3: 12
    },
    {
        name: "레딘",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 42,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [3,4,21,24,25,31,34,42],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 12
    },
    {
        name: "레온",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 43,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [28,35,46,50,52,55,56,62],
        skills: [0],
        group1: 2,
        group2: 6,
        group3: 12
    },
    {
        name: "베른하르트",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 44,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [22,26,33,35,52,55,63,64],
        skills: [0],
        group1: 2,
        group2: 4,
        group3: 12
    },
    {
        name: "라나",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 45,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [0,13,22,26,43,44,62],
        skills: [0],
        group1: 5,
        group2: 4,
        group3: 12
    },
    {
        name: "엘윈",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 46,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [20,25,27,31,34,35,49,57],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 2
    },
    {
        name: "쉐리",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 47,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [7,8,10,17,48,50,57,60],
        skills: [0],
        group1: 1,
        group2: 5,
        group3: 8
    },
    {
        name: "리아나",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 48,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [0,2,4,17,29,44,58],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 5
    },
    {
        name: "알테뮬러",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 49,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [20,25,27,32,46,48,51],
        skills: [0],
        group1: 2,
        group2: 6,
        group3: 4
    },
    {
        name: "루나",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 50,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [16,17,18,47,48,59,60],
        skills: [0],
        group1: 5,
        group2: 3,
        group3: 6
    },
    {
        name: "디하르트",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 51,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [8,9,18,48,54,57,59,60],
        skills: [0],
        group1: 0,
        group2: 3,
        group3: 8
    },
    {
        name: "티아리스",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 52,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [0,5,11,16,18,43,58],
        skills: [0],
        group1: 0,
        group2: 3,
        group3: 5
    },
    {
        name: "쥬그라",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 53,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [22,32,36,38,41,46,51,53,56,63,64],
        skills: [0],
        group1: 3,
        group2: 8,
        group3: 10
    },
    {
        name: "젤다",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 54,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [7,8,10,11,13,62,63,64],
        skills: [0],
        group1: 4,
        group2: 8,
        group3: 10
    },
    {
        name: "제리올&레이라",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 55,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [5,13,43,44,46,56,63,65],
        skills: [0],
        group1: 3,
        group2: 6,
        group3: 12
    },
    {
        name: "셀파닐",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 56,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [0,2,15,17,39,40,42,44],
        skills: [0],
        group1: 5,
        group2: 7,
        group3: 12
    },
    {
        name: "안젤리나",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 57,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [28,41,42,48,50,54,57,60],
        skills: [0],
        group1: 5,
        group2: 7,
        group3: 8
    },
    {
        name: "란포드",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 58,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [20,24,28,35,48,49,52,59],
        skills: [0],
        group1: 6,
        group2: 7,
        group3: 12
    },
    {
        name: "리스틸",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 59,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [19,22,26,46,51,56,63,64],
        skills: [0],
        group1: 4,
        group2: 7,
        group3: 12
    },
    {
        name: "에스텔",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 60,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [3,4,23,24,25,28,31],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 9
    },
    {
        name: "요슈아",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 61,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [7,8,9,12,13,32,35],
        skills: [0],
        group1: 8,
        group2: 5,
        group3: 9
    },
    {
        name: "레온하르트",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 62,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [20,27,29,33,35,52,62],
        skills: [0],
        group1: 3,
        group2: 2,
        group3: 9
    },
    {
        name: "렌",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 63,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [22,27,43,44,62,63,64],
        skills: [0],
        group1: 4,
        group2: 7,
        group3: 9
    },
    {
        name: "란디우스",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 64,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [19,20,23,33,35,52,58,62],
        skills: [0],
        group1: 7,
        group2: 0,
        group3: 12
    },
    {
        name: "레이첼",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 65,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [0,12,13,15,43,45,47,50],
        skills: [0],
        group1: 7,
        group2: 0,
        group3: 12
    },
    {
        name: "윌러",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 66,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [0,1,2,3,11,17,29,44],
        skills: [0],
        group1: 7,
        group2: 6,
        group3: 12
    },
    {
        name: "기자로프",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 67,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [32,36,37,40,41,44,62,63],
        skills: [0],
        group1: 4,
        group2: 10,
        group3: 12
    },
    {
        name: "시그마",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 68,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [9,12,13,17,31,37,40,42],
        skills: [0],
        group1: 0,
        group2: 8,
        group3: 7
    },
    {
        name: "람다",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 69,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [0,3,11,13,14,17,43,44],
        skills: [0],
        group1: 0,
        group2: 7,
        group3: 10
    },
    {
        name: "사쿠라",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 70,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [3,4,31,33,56,60],
        skills: [0],
        group1: 2,
        group2: 0,
        group3: 9
    },
    {
        name: "스미레",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 71,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [15,17,22,24,25,52,58,59],
        skills: [0],
        group1: 2,
        group2: 5,
        group3: 9
    },
    {
        name: "클라렛",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 72,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [28,30,31,34,47,48,59,60],
        skills: [0],
        group1: 5,
        group2: 8,
        group3: 7
    },
    {
        name: "엘라스타",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 73,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [11,13,18,47,51,56,57],
        skills: [0],
        group1: 1,
        group2: 3,
        group3: 6
    },
    {
        name: "오메가",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 74,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [8,9,13,16,40,62,64],
        skills: [0],
        group1: 8,
        group2: 4,
        group3: 12
    },
    {
        name: "유리아",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 75,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [3,4,24,31,34,54,58,59],
        skills: [0],
        group1: 1,
        group2: 5,
        group3: 10
    },
    {
        name: "유스케",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 76,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [3,4,31,32,36,63,64],
        skills: [0],
        group1: 0,
        group2: 10,
        group3: 9
    },
    {
        name: "히에이",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 77,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [8,9,11,13,40,41,62],
        skills: [0],
        group1: 3,
        group2: 8,
        group3: 9
    },
    {
        name: "쿠라마",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 78,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [6,8,17,43,44,62,64],
        skills: [0],
        group1: 7,
        group2: 6,
        group3: 9
    },
    {
        name: "도구로형제",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 79,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [36,46,51,56,57,63,64],
        skills: [0],
        group1: 2,
        group2: 4,
        group3: 9
    },
    {
        name: "레인폴스",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 80,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [4,6,8,12,17,28,31,37],
        skills: [0],
        group1: 6,
        group2: 7,
        group3: 10
    },
    {
        name: "베티",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 81,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [21,22,27,29,35,36,52,57],
        skills: [0],
        group1: 1,
        group2: 2,
        group3: 4
    },
    {
        name: "여신의화신",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 82,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [0,1,11,13,17,43,44],
        skills: [0],
        group1: 1,
        group2: 3,
        group3: 10
    },
    {
        name: "에밀리아",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 83,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [3,4,19,20,22,32,36],
        skills: [0],
        group1: 2,
        group2: 5,
        group3: 12
    },
    {
        name: "비라쥬",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 84,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [4,20,24,28,31,38,42],
        skills: [0],
        group1: 7,
        group2: 8,
        group3: 12
    },
    {
        name: "미지의기사",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 85,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [10,16,43,47,49,54,59],
        skills: [0],
        group1: 6,
        group2: 7,
        group3: 12
    },
    {
        name: "아카야",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 86,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [19,22,44,46,55,56,65],
        skills: [0],
        group1: 1,
        group2: 3,
        group3: 10
    },
    {
        name: "브렌다",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 87,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [24,25,28,29,51,52,57],
        skills: [0],
        group1: 7,
        group2: 8,
        group3: 12
    },
    {
        name: "디드리트",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 88,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [1,17,31,44,45,54,58],
        skills: [0],
        group1: 5,
        group2: 3,
        group3: 9
    },
    {
        name: "아슈람",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 89,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [36,46,51,56,57,63,64],
        skills: [0],
        group1: 4,
        group2: 6,
        group3: 9
    },
    {
        name: "아레스",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 90,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [28,31,34,49,50,59,60],
        skills: [0],
        group1: 0,
        group2: 2,
        group3: 11
    },
    {
        name: "마이야",
        type: 0,
        stats: ["작업중 : ","작업중 : ", 
                "작업중 : ", "작업중 : ", 
                "생명 +, 방어 +, 마방 +",
                "2", "3","4","5","%","%","%","%"],
        ability: 91,
         classes: [
            {
                name: "작업중",
                classes: [
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                        classes: [
                            {
                                name: "작업중"
                            }
                        ]
                    },
                    {
                        name: "작업중",
                    }
                ]
            }
        ],
        troops: [3,4,6,14,17,34,44],
        skills: [0],
        group1: 2,
        group2: 11,
        group3: 12
    }
]
