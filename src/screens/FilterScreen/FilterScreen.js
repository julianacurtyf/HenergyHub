import React, { useState, useEffect } from "react";
import { RefreshControl, View, Text, ScrollView } from "react-native";
import MyBarChart from '../../components/BarChart';
import { MyStyles } from '../../../assets/style/MyStyles';
import firestore from '@react-native-firebase/firestore';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory-native';
import { Picker } from "@react-native-picker/picker";
import CustomButton from '../../components/CustomButton';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

/*
Example Code


global.presidents.forEach(president => {
    await firestore().collection('gender_filter_presidents').add({
        name: president.data.name,
        n_votes: 0,
        gender: 'M',
        president: president.id
    }).then(() => {
        firestore().collection('gender_filter_presidents').add({
            name: president.data.name,
            n_votes: 0,
            gender: 'F',
            president: president.id
        }).then(() => {
            firestore().collection('gender_filter_presidents').add({
                name: president.data.name,
                n_votes: 0,
                gender: 'Outro',
                president: president.id
            })
        })
    })
});

global.presidents.forEach(president => {
    await firestore().collection('race_filter_presidents').add({
        name: president.data.name,
        n_votes: 0,
        race: 'Branca',
        president: president.id
    }).then(() => {
        firestore().collection('race_filter_presidents').add({
            name: president.data.name,
            n_votes: 0,
            race: 'Preta',
            president: president.id
        }).then(() => {
            firestore().collection('race_filter_presidents').add({
                name: president.data.name,
                n_votes: 0,
                race: 'Amarela',
                president: president.id
            }).then(() => {
                firestore().collection('race_filter_presidents').add({
                    name: president.data.name,
                    n_votes: 0,
                    race: 'Parda',
                    president: president.id
                }).then(() => {
                    firestore().collection('race_filter_presidents').add({
                        name: president.data.name,
                        n_votes: 0,
                        race: 'Indígena',
                        president: president.id
                    })
                })
            })
        })
    })
});

global.presidents.forEach(president => {
    await firestore().collection('scholar_filter_presidents').add({
        name: president.data.name,
        n_votes: 0,
        scholar: 'Fundamental Incompleto',
        president: president.id
    }).then(() => {
        firestore().collection('scholar_filter_presidents').add({
            name: president.data.name,
            n_votes: 0,
            scholar: 'Fundamental Completo',
            president: president.id
        }).then(() => {
            firestore().collection('scholar_filter_presidents').add({
                name: president.data.name,
                n_votes: 0,
                scholar: 'Ensino Médio Incompleto',
                president: president.id
            }).then(() => {
                firestore().collection('scholar_filter_presidents').add({
                    name: president.data.name,
                    n_votes: 0,
                    scholar: 'Ensino Médio Completo',
                    president: president.id
                }).then(() => {
                    firestore().collection('scholar_filter_presidents').add({
                        name: president.data.name,
                        n_votes: 0,
                        scholar: 'Ensino Superior Incompleto',
                        president: president.id
                    }).then(() => {
                        firestore().collection('scholar_filter_presidents').add({
                            name: president.data.name,
                            n_votes: 0,
                            scholar: 'Ensino Superior Completo',
                            president: president.id
                        }).then(() => {
                            firestore().collection('scholar_filter_presidents').add({
                                name: president.data.name,
                                n_votes: 0,
                                scholar: 'Pós Graduação',
                                president: president.id
                            })
                        })
                    })
                })
            })
        })
    })
});

global.presidents.forEach(president => {
    await firestore().collection('age_filter_presidents').add({
        name: president.data.name,
        n_votes: 0,
        min_age: 16,
        max_age: 25,
        president: president.id
    }).then(() => {
        firestore().collection('age_filter_presidents').add({
            name: president.data.name,
            n_votes: 0,
            min_age: 26,
            max_age: 35,
            president: president.id
        }).then(() => {
            firestore().collection('age_filter_presidents').add({
                name: president.data.name,
                n_votes: 0,
                min_age: 36,
                max_age: 45,
                president: president.id
            }).then(() => {
                firestore().collection('age_filter_presidents').add({
                    name: president.data.name,
                    n_votes: 0,
                    min_age: 46,
                    max_age: 55,
                    president: president.id
                }).then(() => {
                    firestore().collection('age_filter_presidents').add({
                        name: president.data.name,
                        n_votes: 0,
                        min_age: 56,
                        max_age: 65,
                        president: president.id
                    }).then(() => {
                        firestore().collection('age_filter_presidents').add({
                            name: president.data.name,
                            n_votes: 0,
                            min_age: 66,
                            max_age: 75,
                            president: president.id
                        }).then(() => {
                            firestore().collection('age_filter_presidents').add({
                                name: president.data.name,
                                n_votes: 0,
                                min_age: 76,
                                max_age: 110,
                                president: president.id
                            })
                        })
                    })
                })
            })
        })
    })
});

global.presidents.forEach(president => {
    await firestore().collection('uf_filter_presidents').add({
        name: president.data.name,
        n_votes: 0,
        uf: 'AC',
        president: president.id
    }).then(() => {
        firestore().collection('uf_filter_presidents').add({
            name: president.data.name,
            n_votes: 0,
            uf: 'AL',
            president: president.id
        }).then(() => {
            firestore().collection('uf_filter_presidents').add({
                name: president.data.name,
                n_votes: 0,
                uf: 'AP',
                president: president.id
            }).then(() => {
                firestore().collection('uf_filter_presidents').add({
                    name: president.data.name,
                    n_votes: 0,
                    uf: 'AM',
                    president: president.id
                }).then(() => {
                    firestore().collection('uf_filter_presidents').add({
                        name: president.data.name,
                        n_votes: 0,
                        uf: 'BA',
                        president: president.id
                    }).then(() => {
                        firestore().collection('uf_filter_presidents').add({
                            name: president.data.name,
                            n_votes: 0,
                            uf: 'CE',
                            president: president.id
                        }).then(() => {
                            firestore().collection('uf_filter_presidents').add({
                                name: president.data.name,
                                n_votes: 0,
                                uf: 'DF',
                                president: president.id
                            }).then(() => {
                                firestore().collection('uf_filter_presidents').add({
                                    name: president.data.name,
                                    n_votes: 0,
                                    uf: 'ES',
                                    president: president.id
                                }).then(() => {
                                    firestore().collection('uf_filter_presidents').add({
                                        name: president.data.name,
                                        n_votes: 0,
                                        uf: 'GO',
                                        president: president.id
                                    }).then(() => {
                                        firestore().collection('uf_filter_presidents').add({
                                            name: president.data.name,
                                            n_votes: 0,
                                            uf: 'MA',
                                            president: president.id
                                        }).then(() => {
                                            firestore().collection('uf_filter_presidents').add({
                                                name: president.data.name,
                                                n_votes: 0,
                                                uf: 'MT',
                                                president: president.id
                                            }).then(() => {
                                                firestore().collection('uf_filter_presidents').add({
                                                    name: president.data.name,
                                                    n_votes: 0,
                                                    uf: 'MS',
                                                    president: president.id
                                                }).then(() => {
                                                    firestore().collection('uf_filter_presidents').add({
                                                        name: president.data.name,
                                                        n_votes: 0,
                                                        uf: 'MG',
                                                        president: president.id
                                                    }).then(() => {
                                                        firestore().collection('uf_filter_presidents').add({
                                                            name: president.data.name,
                                                            n_votes: 0,
                                                            uf: 'PA',
                                                            president: president.id
                                                        }).then(() => {
                                                            firestore().collection('uf_filter_presidents').add({
                                                                name: president.data.name,
                                                                n_votes: 0,
                                                                uf: 'PB',
                                                                president: president.id
                                                            }).then(() => {
                                                                firestore().collection('uf_filter_presidents').add({
                                                                    name: president.data.name,
                                                                    n_votes: 0,
                                                                    uf: 'PR',
                                                                    president: president.id
                                                                }).then(() => {
                                                                    firestore().collection('uf_filter_presidents').add({
                                                                        name: president.data.name,
                                                                        n_votes: 0,
                                                                        uf: 'PE',
                                                                        president: president.id
                                                                    }).then(() => {
                                                                        firestore().collection('uf_filter_presidents').add({
                                                                            name: president.data.name,
                                                                            n_votes: 0,
                                                                            uf: 'PI',
                                                                            president: president.id
                                                                        }).then(() => {
                                                                            firestore().collection('uf_filter_presidents').add({
                                                                                name: president.data.name,
                                                                                n_votes: 0,
                                                                                uf: 'RJ',
                                                                                president: president.id
                                                                            }).then(() => {
                                                                                firestore().collection('uf_filter_presidents').add({
                                                                                    name: president.data.name,
                                                                                    n_votes: 0,
                                                                                    uf: 'RN',
                                                                                    president: president.id
                                                                                }).then(() => {
                                                                                    firestore().collection('uf_filter_presidents').add({
                                                                                        name: president.data.name,
                                                                                        n_votes: 0,
                                                                                        uf: 'RS',
                                                                                        president: president.id
                                                                                    }).then(() => {
                                                                                        firestore().collection('uf_filter_presidents').add({
                                                                                            name: president.data.name,
                                                                                            n_votes: 0,
                                                                                            uf: 'RO',
                                                                                            president: president.id
                                                                                        }).then(() => {
                                                                                            firestore().collection('uf_filter_presidents').add({
                                                                                                name: president.data.name,
                                                                                                n_votes: 0,
                                                                                                uf: 'RR',
                                                                                                president: president.id
                                                                                            }).then(() => {
                                                                                                firestore().collection('uf_filter_presidents').add({
                                                                                                    name: president.data.name,
                                                                                                    n_votes: 0,
                                                                                                    uf: 'SC',
                                                                                                    president: president.id
                                                                                                }).then(() => {
                                                                                                    firestore().collection('uf_filter_presidents').add({
                                                                                                        name: president.data.name,
                                                                                                        n_votes: 0,
                                                                                                        uf: 'SP',
                                                                                                        president: president.id
                                                                                                    }).then(() => {
                                                                                                        firestore().collection('uf_filter_presidents').add({
                                                                                                            name: president.data.name,
                                                                                                            n_votes: 0,
                                                                                                            uf: 'SE',
                                                                                                            president: president.id
                                                                                                        }).then(() => {
                                                                                                            firestore().collection('uf_filter_presidents').add({
                                                                                                                name: president.data.name,
                                                                                                                n_votes: 0,
                                                                                                                uf: 'TO',
                                                                                                                president: president.id
                                                                                                            })
                                                                                                        })
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
});

global.governors.forEach(governor => {
    await firestore().collection('gender_filter_governors').add({
        name: governor.data.name,
        uf: governor.data.uf,
        n_votes: 0,
        gender: 'M',
        governor: governor.id
    }).then(() => {
        firestore().collection('gender_filter_governors').add({
            name: governor.data.name,
            n_votes: 0,
            uf: governor.data.uf,
            gender: 'F',
            governor: governor.id
        }).then(() => {
            firestore().collection('gender_filter_governors').add({
                name: governor.data.name,
                n_votes: 0,
                uf: governor.data.uf,
                gender: 'Outro',
                governor: governor.id
            })
        })
    })
});

global.governors.forEach(governor => {
    await firestore().collection('race_filter_governors').add({
        name: governor.data.name,
        uf: governor.data.uf,
        n_votes: 0,
        race: 'Branca',
        governor: governor.id
    }).then(() => {
        firestore().collection('race_filter_governors').add({
            name: governor.data.name,
            uf: governor.data.uf,
            n_votes: 0,
            race: 'Preta',
            governor: governor.id
        }).then(() => {
            firestore().collection('race_filter_governors').add({
                name: governor.data.name,
                uf: governor.data.uf,
                n_votes: 0,
                race: 'Amarela',
                governor: governor.id
            }).then(() => {
                firestore().collection('race_filter_governors').add({
                    name: governor.data.name,
                    uf: governor.data.uf,
                    n_votes: 0,
                    race: 'Parda',
                    governor: governor.id
                }).then(() => {
                    firestore().collection('race_filter_governors').add({
                        name: governor.data.name,
                        uf: governor.data.uf,
                        n_votes: 0,
                        race: 'Indígena',
                        governor: governor.id
                    })
                })
            })
        })
    })
});

global.governors.forEach(governor => {
    await firestore().collection('scholar_filter_governors').add({
        name: governor.data.name,
        uf: governor.data.uf,
        n_votes: 0,
        scholar: 'Fundamental Incompleto',
        governor: governor.id
    }).then(() => {
        firestore().collection('scholar_filter_governors').add({
            name: governor.data.name,
            uf: governor.data.uf,
            n_votes: 0,
            scholar: 'Fundamental Completo',
            governor: governor.id
        }).then(() => {
            firestore().collection('scholar_filter_governors').add({
                name: governor.data.name,
                uf: governor.data.uf,
                n_votes: 0,
                scholar: 'Ensino Médio Incompleto',
                governor: governor.id
            }).then(() => {
                firestore().collection('scholar_filter_governors').add({
                    name: governor.data.name,
                    uf: governor.data.uf,
                    n_votes: 0,
                    scholar: 'Ensino Médio Completo',
                    governor: governor.id
                }).then(() => {
                    firestore().collection('scholar_filter_governors').add({
                        name: governor.data.name,
                        uf: governor.data.uf,
                        n_votes: 0,
                        scholar: 'Ensino Superior Incompleto',
                        governor: governor.id
                    }).then(() => {
                        firestore().collection('scholar_filter_governors').add({
                            name: governor.data.name,
                            uf: governor.data.uf,
                            n_votes: 0,
                            scholar: 'Ensino Superior Completo',
                            governor: governor.id
                        }).then(() => {
                            firestore().collection('scholar_filter_governors').add({
                                name: governor.data.name,
                                uf: governor.data.uf,
                                n_votes: 0,
                                scholar: 'Pós Graduação',
                                governor: governor.id
                            })
                        })
                    })
                })
            })
        })
    })
});

global.governors.forEach(governor => {
    await firestore().collection('age_filter_governors').add({
        name: governor.data.name,
        uf: governor.data.uf,
        n_votes: 0,
        min_age: 16,
        max_age: 25,
        governor: governor.id
    }).then(() => {
        firestore().collection('age_filter_governors').add({
            name: governor.data.name,
            uf: governor.data.uf,
            n_votes: 0,
            min_age: 26,
            max_age: 35,
            governor: governor.id
        }).then(() => {
            firestore().collection('age_filter_governors').add({
                name: governor.data.name,
                uf: governor.data.uf,
                n_votes: 0,
                min_age: 36,
                max_age: 45,
                governor: governor.id
            }).then(() => {
                firestore().collection('age_filter_governors').add({
                    name: governor.data.name,
                    uf: governor.data.uf,
                    n_votes: 0,
                    min_age: 46,
                    max_age: 55,
                    governor: governor.id
                }).then(() => {
                    firestore().collection('age_filter_governors').add({
                        name: governor.data.name,
                        uf: governor.data.uf,
                        n_votes: 0,
                        min_age: 56,
                        max_age: 65,
                        governor: governor.id
                    }).then(() => {
                        firestore().collection('age_filter_governors').add({
                            name: governor.data.name,
                            uf: governor.data.uf,
                            n_votes: 0,
                            min_age: 66,
                            max_age: 75,
                            governor: governor.id
                        }).then(() => {
                            firestore().collection('age_filter_governors').add({
                                name: governor.data.name,
                                uf: governor.data.uf,
                                n_votes: 0,
                                min_age: 76,
                                max_age: 110,
                                governor: governor.id
                            })
                        })
                    })
                })
            })
        })
    })
});
*/

const StatsScreen = ({ navigation }) => {
    const [uf, setUf] = useState('');
    const [refreshing, setRefreshing] = useState(false);
    const [refresh, setRefresh] = useState(false);
    // const [president_filter_id, setPresidentFilteredId] = useState([]);
    // const [president_filter_name, setPresidentFilteredName] = useState([]);
    // const [president_filter_vote, setPresidentFilteredVote] = useState([]);
    const [data_president_filter, setDataPresidentFiltered] = useState([]);
    // const [governor_filter_id, setGovernorFilteredId] = useState([]);
    // const [governor_filter_name, setGovernorFilteredName] = useState([]);
    // const [governor_filter_vote, setGovernorFilteredVote] = useState([]);
    const [data_governor_filter, setDataGovernorFiltered] = useState([]);
    const [president_filter, setPresidentFilter] = useState('');
    const [governor_filter, setGovernorFilter] = useState('');

    if (global.update == true) {
        // setPresidentFilteredId([]);
        // setPresidentFilteredName([]);
        // setPresidentFilteredVote([]);
        setDataPresidentFiltered([]);
        // setGovernorFilteredId([]);
        // setGovernorFilteredName([]);
        // setGovernorFilteredVote([]);
        setDataGovernorFiltered([]);
        wait(2000).then(() => { setRefresh(1 - refresh) });
        global.update = false;
    }

    // async function getPresidentBy(president_filter) {
    //     const name = [];
    //     const id = [];
    //     const vote = [];

    //     if (president_filter == 'gender') {
    //         await firestore()
    //             .collection('gender_filter_presidents')
    //             .get()
    //             .then(querySnapshot => {
    //                 querySnapshot.forEach(documentSnapshot => {
    //                     if(documentSnapshot.data().n_votes > 0){
    //                         name.push(documentSnapshot.data().name + ' ' + documentSnapshot.data().gender);
    //                         id.push(documentSnapshot.id);
    //                         vote.push(documentSnapshot.data().n_votes);
    //                     }
    //                 });
    //             });
    //         setPresidentFilteredId(id);
    //         setPresidentFilteredName(name);
    //         setPresidentFilteredVote(vote);
    //     }

    //     if (president_filter == 'age') {
    //         await firestore()
    //             .collection('age_filter_presidents')
    //             .get()
    //             .then(querySnapshot => {
    //                 querySnapshot.forEach(documentSnapshot => {
    //                     if(documentSnapshot.data().n_votes > 0){
    //                     name.push(documentSnapshot.data().name + ' ' + documentSnapshot.data().min_age.toString() + '-' + documentSnapshot.data().max_age.toString());
    //                     id.push(documentSnapshot.id);
    //                     vote.push(documentSnapshot.data().n_votes);
    //                     }
    //                 });
    //             });
    //         setPresidentFilteredId(id);
    //         setPresidentFilteredName(name);
    //         setPresidentFilteredVote(vote);
    //     }

    //     if (president_filter == 'race') {
    //         await firestore()
    //             .collection('race_filter_presidents')
    //             .get()
    //             .then(querySnapshot => {
    //                 querySnapshot.forEach(documentSnapshot => {
    //                     if(documentSnapshot.data().n_votes > 0){
    //                     name.push(documentSnapshot.data().name + ' ' + documentSnapshot.data().race);
    //                     id.push(documentSnapshot.id);
    //                     vote.push(documentSnapshot.data().n_votes);
    //                     }
    //                 });
    //             });
    //         setPresidentFilteredId(id);
    //         setPresidentFilteredName(name);
    //         setPresidentFilteredVote(vote);
    //     }

    //     if (president_filter == 'scholar') {
    //         await firestore()
    //             .collection('scholar_filter_presidents')
    //             .get()
    //             .then(querySnapshot => {
    //                 querySnapshot.forEach(documentSnapshot => {
    //                     if(documentSnapshot.data().n_votes > 0){
    //                     name.push(documentSnapshot.data().name + ' ' + documentSnapshot.data().scholar);
    //                     id.push(documentSnapshot.id);
    //                     vote.push(documentSnapshot.data().n_votes);
    //                     }
    //                 });
    //             });
    //         setPresidentFilteredId(id);
    //         setPresidentFilteredName(name);
    //         setPresidentFilteredVote(vote);
    //     }

    //     if (president_filter == 'uf') {
    //         await firestore()
    //             .collection('uf_filter_presidents')
    //             .get()
    //             .then(querySnapshot => {
    //                 querySnapshot.forEach(documentSnapshot => {
    //                     if(documentSnapshot.data().n_votes > 0){
    //                     name.push(documentSnapshot.data().name + ' ' + documentSnapshot.data().uf);
    //                     id.push(documentSnapshot.id);
    //                     vote.push(documentSnapshot.data().n_votes);
    //                     }
    //                 });
    //             });
    //         setPresidentFilteredId(id);
    //         setPresidentFilteredName(name);
    //         setPresidentFilteredVote(vote);
    //     }
    // }

    // async function getGovernorBy(governor_filter) {
    //     const name = [];
    //     const id = [];
    //     const vote = [];

    //     if (governor_filter == 'gender') {
    //         await firestore()
    //             .collection('gender_filter_governors')
    //             .where('uf', '==', uf)
    //             .get()
    //             .then(querySnapshot => {
    //                 querySnapshot.forEach(documentSnapshot => {
    //                     if(documentSnapshot.data().n_votes > 0){
    //                     name.push(documentSnapshot.data().name + ' ' + documentSnapshot.data().gender);
    //                     id.push(documentSnapshot.id);
    //                     vote.push(documentSnapshot.data().n_votes);
    //                     }
    //                 });
    //             });
    //         setGovernorFilteredId(id);
    //         setGovernorFilteredName(name);
    //         setGovernorFilteredVote(vote);
    //     }

    //     if (governor_filter == 'age') {
    //         await firestore()
    //             .collection('age_filter_governors')
    //             .where('uf', '==', uf)
    //             .get()
    //             .then(querySnapshot => {
    //                 querySnapshot.forEach(documentSnapshot => {
    //                     if(documentSnapshot.data().n_votes > 0){
    //                     name.push(documentSnapshot.data().name + ' ' + documentSnapshot.data().min_age.toString() + '-' + documentSnapshot.data().max_age.toString());
    //                     id.push(documentSnapshot.id);
    //                     vote.push(documentSnapshot.data().n_votes);
    //                     }
    //                 });
    //             });
    //         setGovernorFilteredId(id);
    //         setGovernorFilteredName(name);
    //         setGovernorFilteredVote(vote);
    //     }

    //     if (governor_filter == 'race') {
    //         await firestore()
    //             .collection('race_filter_governors')
    //             .where('uf', '==', uf)
    //             .get()
    //             .then(querySnapshot => {
    //                 querySnapshot.forEach(documentSnapshot => {
    //                     if(documentSnapshot.data().n_votes > 0){
    //                     name.push(documentSnapshot.data().name + ' ' + documentSnapshot.data().race);
    //                     id.push(documentSnapshot.id);
    //                     vote.push(documentSnapshot.data().n_votes);
    //                     }
    //                 });
    //             });
    //         setGovernorFilteredId(id);
    //         setGovernorFilteredName(name);
    //         setGovernorFilteredVote(vote);
    //     }

    //     if (governor_filter == 'scholar') {
    //         await firestore()
    //             .collection('scholar_filter_governors')
    //             .where('uf', '==', uf)
    //             .get()
    //             .then(querySnapshot => {
    //                 querySnapshot.forEach(documentSnapshot => {
    //                     if(documentSnapshot.data().n_votes > 0){
    //                     name.push(documentSnapshot.data().name + ' ' + documentSnapshot.data().scholar);
    //                     id.push(documentSnapshot.id);
    //                     vote.push(documentSnapshot.data().n_votes);
    //                     }
    //                 });
    //             });
    //         setGovernorFilteredId(id);
    //         setGovernorFilteredName(name);
    //         setGovernorFilteredVote(vote);
    //     }
    // }

    function getPresidentBy(filter){

        if(filter == "gender") {
            for(let i = 0; i < global.presidents.length; i++){
                if(global.presidents[i].data.gender_M > 0 || global.presidents[i].data.gender_F > 0 || global.presidents[i].data.gender_Outro > 0)
                data_president_filter.push({name: global.presidents[i].data.name,
                    gender_M: global.presidents[i].data.gender_M,
                    gender_F: global.presidents[i].data.gender_F,
                    gender_Outro: global.presidents[i].data.gender_Outro})
            }
        }

        if(filter == "race") {
            for(let i = 0; i < global.presidents.length; i++){
                if(global.presidents[i].data.race_Amarela > 0 || global.presidents[i].data.race_Branca > 0 || global.presidents[i].data.race_Indigena > 0 || global.presidents[i].data.race_Parda > 0 || global.presidents[i].data.race_Preta > 0)
                data_president_filter.push({name: global.presidents[i].data.name,
                    race_Amarela: global.presidents[i].data.race_Amarela,
                    race_Branca: global.presidents[i].data.race_Branca,
                    race_Indigena: global.presidents[i].data.race_Indigena,
                    race_Parda: global.presidents[i].data.race_Parda,
                    race_Preta: global.presidents[i].data.race_Preta
                })
            }
        }

        if(filter == "age") {
            for(let i = 0; i < global.presidents.length; i++){
                if(global.presidents[i].data.age_16_25 > 0 || global.presidents[i].data.age_26_35 > 0 || global.presidents[i].data.age_36_45 > 0 || global.presidents[i].data.age_46_55 > 0 || global.presidents[i].data.age_56_65 > 0 || global.presidents[i].data.age_66_75 > 0 || global.presidents[i].data.age_76 > 0)
                data_president_filter.push({name: global.presidents[i].data.name,
                    age_16_25: global.presidents[i].data.age_16_25,
                    age_26_35: global.presidents[i].data.age_26_35,
                    age_36_45: global.presidents[i].data.age_36_45,
                    age_46_55: global.presidents[i].data.age_46_55,
                    age_56_65: global.presidents[i].data.age_56_65,
                    age_66_75: global.presidents[i].data.age_66_75,
                    age_76: global.presidents[i].data.age_76
                })
            }
        }
    }

    function getGovernorBy(filter){

        if(filter == "gender") {
            for(let i = 0; i < global.governors.length; i++){
                if(global.governors[i].data.uf == uf && (global.governors[i].data.gender_M > 0 || global.governors[i].data.gender_F > 0 || global.governors[i].data.gender_Outro > 0))
                data_president_filter.push({name: global.governors[i].data.name,
                    gender_M: global.governors[i].data.gender_M,
                    gender_F: global.governors[i].data.gender_F,
                    gender_Outro: global.governors[i].data.gender_Outro})
            }
        }

        if(filter == "race") {
            for(let i = 0; i < global.governors.length; i++){
                if(global.governors[i].data.uf == uf && (global.governors[i].data.race_Amarela > 0 || global.governors[i].data.race_Branca > 0 || global.governors[i].data.race_Indigena > 0 || global.governors[i].data.race_Parda > 0 || global.governors[i].data.race_Preta > 0))
                data_president_filter.push({name: global.governors[i].data.name,
                    race_Amarela: global.governors[i].data.race_Amarela,
                    race_Branca: global.governors[i].data.race_Branca,
                    race_Indigena: global.governors[i].data.race_Indigena,
                    race_Parda: global.governors[i].data.race_Parda,
                    race_Preta: global.governors[i].data.race_Preta
                })
            }
        }

        if(filter == "age") {
            for(let i = 0; i < global.governors.length; i++){
                if(global.governors[i].data.uf == uf && (global.governors[i].data.age_16_25 > 0 || global.governors[i].data.age_26_35 > 0 || global.governors[i].data.age_36_45 > 0 || global.governors[i].data.age_46_55 > 0 || global.governors[i].data.age_56_65 > 0 || global.governors[i].data.age_66_75 > 0 || global.governors[i].data.age_76 > 0))
                data_president_filter.push({name: global.governors[i].data.name,
                    age_16_25: global.governors[i].data.age_16_25,
                    age_26_35: global.governors[i].data.age_26_35,
                    age_36_45: global.governors[i].data.age_36_45,
                    age_46_55: global.governors[i].data.age_46_55,
                    age_56_65: global.governors[i].data.age_56_65,
                    age_66_75: global.governors[i].data.age_66_75,
                    age_76: global.governors[i].data.age_76
                })
            }
        }
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(500).then(() => { setRefreshing(false) });
        wait(2000).then(() => { setRefresh(1 - refresh) });
    }, []);

    useEffect(() => {
        if (president_filter == '') {
            setPresidentFilter('gender');
        }
    }, []);

    useEffect(() => {
        if (governor_filter == '') {
            setGovernorFilter('gender');
        }
    }, []);

    useEffect(() => {
        if (uf == '') {
            setUf(global.user.data.uf);
        }
    }, []);

    useEffect(() => {
        if (data_president_filter.length == 0) {
            getPresidentBy(president_filter);
        };
    }, [president_filter, refresh]);

    useEffect(() => {
        if (data_governor_filter.length == 0) {
            getGovernorBy(governor_filter);
        };
    }, [governor_filter, refresh]);

    function render(filter, data_array) {

        const arr = data_array;

        console.log(arr);

        if(arr.length == 0 && filter == "gender"){
            return   <VictoryBar data={[{x: "M", y: 1}, {x: "F", y: 1}, {x: "Outro", y: 1}]} />;
        }
        if(arr.length == 0 && filter == "race"){
            <VictoryBar 
                data = {[{x: "Amarela", y: 1},
                    {x:"Branca", y: 1},
                    {x:"Indígena", y: 1},
                    {x:"Parda", y: 1},
                    {x:"Preta", y: 1}]}  />
        }
        if(arr.length == 0 && filter == "age"){
            <VictoryBar 
            data = {[{x: "16-25", y: 1},
            {x:"26-35", y: 1},
            {x:"36-45", y: 1},
            {x:"46-55", y: 1},
            {x:"56-65", y: 1},
            {x:"66-75", y: 1},
            {x:"76-", y: 1}]}  />
        }
        
        return arr.map((obj, index) => {
          // Compose a unique key for the text element. A unique key is need when 
          // rendering lists of components
          const key = index;
      
          // Add return to ensure the text element is returned from map callback
          if(filter == "gender"){
            return <VictoryBar labels={({ datum }) => obj.name == undefined ? 'err' : obj.name} data = {[{x: "M", y: obj.gender_M},{x:"F", y: obj.gender_F}, {x:"Outro", y: obj.gender_Outro}]} />;
          }
          if(filter == "race"){
            return <VictoryBar 
                labels={({ datum }) => obj.name == undefined ? 'err' : obj.name}
                data = {[{x: "Amarela", y: obj.race_Amarela},
                    {x:"Branca", y: obj.race_Branca},
                    {x:"Indígena", y: obj.race_Indigena},
                    {x:"Parda", y: obj.race_Parda},
                    {x:"Preta", y: obj.race_Preta}]}  />
          }
          if(filter == "age"){
            return <VictoryBar 
                labels={({ datum }) => obj.name == undefined ? 'err' : obj.name}
                data = {[{x: "16-25", y: obj.age_16_25},
                    {x:"26-35", y: obj.age_26_35},
                    {x:"36-45", y: obj.age_36_45},
                    {x:"46-55", y: obj.age_46_55},
                    {x:"56-65", y: obj.age_56_65},
                    {x:"66-75", y: obj.age_66_75},
                    {x:"76-", y: obj.age_76}
                ]}  />
          }
        });
    }

    // useEffect(() => {
    //     if (president_filter_id.length == 0) {
    //         getGovernorBy(governor_filter);
    //     };
    // }, [governor_filter, refresh]);

    // useEffect(() => {
    //     if (president_filter_id.length == president_filter_name.length && president_filter_id.length == president_filter_vote.length) {
    //         for (var i = 0; i < president_filter_vote.length; i++) {
    //             data_president_filter.push({ id: president_filter_id[i] == undefined ? i : president_filter_id[i], votes: president_filter_vote[i] == undefined ? i : president_filter_vote[i] });
    //         }
    //     }
    // }, [president_filter, refresh]);

    // useEffect(() => {
    //     if (governor_filter_id.length == governor_filter_name.length && governor_filter_id.length == governor_filter_vote.length) {
    //         for (var i = 0; i < governor_filter_vote.length; i++) {
    //             data_governor_filter.push({ id: governor_filter_id[i] == undefined ? i : governor_filter_id[i], votes: governor_filter_vote[i] == undefined ? i : governor_filter_vote[i] });
    //         }
    //     }
    // }, [governor_filter, refresh]);

    return (
        <ScrollView refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
            />
        }>
            <View style={MyStyles.container1}>
                <Text style={MyStyles.subtitleGray}>{global.user.data.first_name}, as atualizações em tempo real das intenções de voto para governador de e presidente são:</Text>
                <View style={MyStyles.container}>
                    <View style={MyStyles.containerText}>
                        <Text style={MyStyles.text}>Filtros Presidente</Text>
                        <Picker selectedValue={president_filter}
                            enabled={global.user.data.plan == 'basic' ? false : true}
                            onValueChange={(itemValue, itemIndex) => {
                                setPresidentFilter(itemValue);
                                // setPresidentFilteredId([]);
                                // setPresidentFilteredName([]);
                                // setPresidentFilteredVote([]);
                                setDataPresidentFiltered([]);
                                wait(2000).then(() => { setRefresh(1 - refresh) });
                            }
                            }
                            itemStyle={{ fontSize: 14, height: 50, width: 130 }}>
                            <Picker.Item label="Gênero" value="gender" />
                            <Picker.Item label="Idade" value="age" />
                            <Picker.Item label="Raça" value="race" />
                        </Picker>
                    </View>

                    <View style={MyStyles.barChart}>
                        <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
                            <VictoryStack colorScale={"qualitative"} >
                                {render(president_filter, data_president_filter)}
                            </VictoryStack>
                        </VictoryChart>
                    </View>

                    <View style={MyStyles.containerText}>
                        <Text style={MyStyles.text}>Filtros Governador</Text>
                        <Picker selectedValue={governor_filter}
                            enabled={global.user.data.plan == 'basic' ? false : true}
                            onValueChange={(itemValue, itemIndex) => {
                                setGovernorFilter(itemValue);
                                // setGovernorFilteredId([]);
                                // setGovernorFilteredName([]);
                                // setGovernorFilteredVote([]);
                                setDataGovernorFiltered([]);
                                wait(2000).then(() => { setRefresh(1 - refresh) });
                            }
                            }
                            itemStyle={{ fontSize: 14, height: 50, width: 130 }}>
                            <Picker.Item label="Gênero" value="gender" />
                            <Picker.Item label="Idade" value="age" />
                            <Picker.Item label="Raça" value="race" />
                        </Picker>
                    </View>

                    <View style={MyStyles.barChart}>
                        <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
                            <VictoryStack colorScale={"qualitative"} >
                                {render(governor_filter, data_governor_filter)}
                            </VictoryStack>
                        </VictoryChart>
                    </View>

                </View>

            </View>
        </ScrollView>
    );
}

export default StatsScreen;