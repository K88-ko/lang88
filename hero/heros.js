const Main = { 
    data: function() {
        return {
            heroes: heroes
        }
    },
    template: `
    <div>
        <router-link v-for="(hero, i) in heroes" :to="'/hero/' + i" :key="i"><img :src="'img/portrait/' + i + '.png'" class="mh20 portrait"></router-link>
    </div>` 
}

const Hero = {
    data: function() {
        return {
            heroes: heroes,
            troops: troops,
            ability: ability,
            skills: skills,
        }
    },
    methods: {
        skill(id) {
            if (skills[id].id) {
                return skills[id].id;
            } else {
                return id;
            }
        }
    },
    computed: {
        hero () {
            return heroes[this.$route.params.id]
        }
    },
    template: `
    <div>
        <h5></h5>
        <div class="row u-max-full-width">
            <div class="row-name">{{ hero.name }}</div>
            <div class="row-content">
                <p style="text-align: center;">
                <img :src="'img/type/' + hero.type + '.png'" class="u-max-full-width">
                <img :src="'img/group/' + hero.group1 + '.png'" calss="u-max-full-width">
                <img :src="'img/group/' + hero.group2 + '.png'" calss="u-max-full-width">
                <img :src="'img/group/' + hero.group3 + '.png'" calss="u-max-full-width">
                <br>
                <img :src="'img/F_hero/' + $route.params.id + '.png'" class="u-max-full-width">
                </br>    
            </div>
        </div>
        <div class="row u-max-full-width">
            <div class="row-name">호감도 정보</div>
            <div class="row-content">
                <table>
                    <tr>
                        <td>중앙 4</td>
                        <td>{{ hero.stats[0] }}</td>
                        <td>중앙 7</td>
                        <td>{{ hero.stats[1] }}</td>
                    </tr>
                    <tr>
                        <td>중앙 4</td>
                        <td>{{ hero.stats[2] }}</td>
                        <td>중앙 7</td>
                        <td>{{ hero.stats[3] }}</td>
                    </tr>
                    <tr>
                        <td>능력치</td>
                        <td>{{ hero.stats[4] }}</td>
                    </tr>
                    <tr>
                        <td>호감도10</td>
                        <td>{{ hero.stats[5] }}</td>
                        <td>호감도15</td>
                        <td>{{ hero.stats[6] }}</td>
                    </tr>
                    <tr>
                        <td>호감도23</td>
                        <td>{{ hero.stats[7] }}</td>
                        <td>호감도25</td>
                        <td>{{ hero.stats[8] }}</td>
                    </tr>
                </table>
            </div>
            <div class="row-name">용병 수정치</div>
                <div class="row-content">
                    <table>
                    <tr>
                        <td>생명 + </td>
                        <td>{{ hero.stats[9] }}</td>
                        <td>공격 + </td>
                        <td>{{ hero.stats[10] }}</td>
                    </tr>
                    <tr>
                        <td>방어 + </td>
                        <td>{{ hero.stats[11] }}</td>
                        <td>마방 + </td>
                        <td>{{ hero.stats[12] }}</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="row u-max-full-width">
            <div class="row-name">고유 기술</div>
            <div class="block">
                <div class="two columns">
                    <img :src="'img/ability/' + hero.ability + '.png'" class="u-full-width img">
                </div>
                <div class="ten columns">
                    <p><strong>{{ ability[hero.ability].name }}</strong></p>
                    <p>{{ ability[hero.ability].desc }}</p>
                </div>
            </div>
        </div>
        <div class="row u-max-full-width">
            <div class="row-name">클래스 전직</div>
            <div class="row-content">
                <table class="u-full-width">
                    <ul>
                        <li v-for="cl in hero.classes">
                            {{ cl.name }}
                            <ul>
                                <li v-for="cl in cl.classes">
                                    {{ cl.name }}
                                    <ul>
                                        <li v-for="cl in cl.classes">
                                            {{ cl.name }}
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </table>
            </div>
        </div>
        <div class="row u-max-full-width">
            <div class="row-name">용병</div>
            <div class="block" v-for="troopId in hero.troops">
                <div class="two columns">
                    <img :src="'img/troop/' + troopId + '.png'" class="u-full-width">
                    <p style="text-align: center;">{{ troops[troopId].name }}</p>
                </div>
                <div class="ten columns">
                    <table>
                        <tr>
                            <td>생명</td>
                            <td>{{ troops[troopId].stats[0] }}</td>
                            <td>공격</td>
                            <td>{{ troops[troopId].stats[1] }}</td>
                        </tr>
                        <tr>
                            <td>방어</td>
                            <td>{{ troops[troopId].stats[2] }}</td>
                            <td>마방</td>
                            <td>{{ troops[troopId].stats[3] }}</td>
                        </tr>
                    </table>
                    <div>능력 : {{ troops[troopId].skill }}</div>
                </div>
            </div>
        </div>
        <div class="row u-max-full-width">
            <div class="row-name">보유 스킬</div>
            <div class="block" v-for="skillId in hero.skills">
                <div class="two columns">
                    <img :src="'img/skills/' + skill(skillId) + '.png'" class="u-full-width" style="border-radius: 10px;">
                </div>
                <div class="ten columns">
                    <p style="padding-bottom: 20px;"><strong>{{ skills[skillId].name }}</strong></p>
                    <p>{{ skills[skillId].desc }}</p>
                </div>
            </div>
        </div>
    </div>`
}

const routes = [
    { path: '/', component: Main },
    { path: '/hero/:id', component: Hero }
]

const router = new VueRouter({
    routes
})
