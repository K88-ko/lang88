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
        troops: [0],
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
        troops: [0],
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
        troops: [0],
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
        troops: [0],
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
        troops: [0],
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
        troops: [0],
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
        troops: [0],
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
        troops: [0],
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
        troops: [0],
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
        troops: [0],
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
        troops: [0],
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
        troops: [0],
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
        troops: [0],
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
        troops: [0],
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
        troops: [0],
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
        troops: [0],
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
        troops: [0],
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
        troops: [0],
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
        troops: [0],
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
        troops: [0],
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
        troops: [0],
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
        troops: [0],
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
        troops: [0],
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
        troops: [0],
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
        troops: [0],
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
        troops: [0],
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
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
        troops: [0],
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 12
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 12
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 12
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 12
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 12
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 12
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 12
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 12
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 12
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 12
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 12
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 12
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 12
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 12
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 12
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 12
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 12
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 12
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 12
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 12
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 12
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 12
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 12
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 12
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 12
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 12
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 12
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 12
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 12
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 12
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 12
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 12
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
        troops: [0],
        skills: [0],
        group1: 0,
        group2: 1,
        group3: 12
    }
]
