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
            skills: skills
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
                <img :src="'img/type/' + hero.type + '.png'" class="u-max-full-width">
                <img :src="'img/F_hero/' + $route.params.id + '.png'" class="u-max-full-width">
            </div>
        </div>
        <div class="row u-max-full-width">
            <div class="row-name">History</div>
            <div class="row-content">{{ hero.history }}</div>
        </div>
        <div class="row u-max-full-width">
            <div class="row-name">Stats</div>
            <div class="row-content">
                <table>
                    <tr>
                        <td>생명력</td>
                        <td>{{ hero.stats[0] }}</td>
                        <td>공격</td>
                        <td>{{ hero.stats[1] }}</td>
                    </tr>
                    <tr>
                        <td>지력</td>
                        <td>{{ hero.stats[2] }}</td>
                        <td>방어</td>
                        <td>{{ hero.stats[3] }}</td>
                    </tr>
                    <tr>
                        <td>마방</td>
                        <td>{{ hero.stats[4] }}</td>
                        <td>기술</td>
                        <td>{{ hero.stats[5] }}</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="row u-max-full-width">
            <div class="row-name">Ability</div>
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
            <div class="row-name">Class Changes</div>
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
            <div class="row-name">Troops</div>
            <div class="block" v-for="troopId in hero.troops">
                <div class="two columns">
                    <img :src="'img/troops/' + troopId + '.png'" class="u-full-width">
                    <p style="text-align: center;">{{ troops[troopId].name }}</p>
                </div>
                <div class="ten columns">
                    <table>
                        <tr>
                            <td>HP</td>
                            <td>{{ troops[troopId].stats[0] }}</td>
                            <td>Atk</td>
                            <td>{{ troops[troopId].stats[1] }}</td>
                        </tr>
                        <tr>
                            <td>Def</td>
                            <td>{{ troops[troopId].stats[2] }}</td>
                            <td>Res</td>
                            <td>{{ troops[troopId].stats[3] }}</td>
                        </tr>
                    </table>
                    <div>Skill: {{ troops[troopId].skill }}</div>
                </div>
            </div>
        </div>
        <div class="row u-max-full-width">
            <div class="row-name">Skill Unlock</div>
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
