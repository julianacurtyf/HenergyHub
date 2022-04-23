import React from "react";
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
import RNSmtpMailer from "react-native-smtp-mailer";

async function verifyUserByEmailAndPassword(email, password, navigation) {
    await firestore()
         .collection('users')
         .where('email','==',email)
         .where('password','==',password)
         .get()
         .then(querySnapshot => {
           querySnapshot.forEach(documentSnapshot => {
             global.user = {id: documentSnapshot.id, data:documentSnapshot.data()};
             console.log(global.presidents);
             navigation.navigate('Home');
           });
           if(querySnapshot.empty){
             console.warn("Account does not exist!");
           };
         })
         .catch((err) => {throw new Error('Error: Getting User');});
}

async function insertUser(values, navigation) {
    await firestore()
          .collection('users')
          .where('email','==',values.email)
          .get()
          .then(querySnapshot => {
            if(querySnapshot.empty){
              firestore()
              .collection('users')
              .where('cpf','==',values.cpf)
              .get()
              .then(querySnapshot => {
                if(querySnapshot.empty){
                firestore().collection('users')
                  .add({
                    first_name: values.firstName,
                    last_name: values.lastName,
                    email: values.email,
                    password: values.password,
                    cpf: values.cpf,
                    uf: values.uf,
                    gender: values.gender,
                    age: values.age,
                    scholar: values.scholar,
                    cep: values.cep,
                    race: values.race,
                    plan: 'basic',
                    vote_president: '',
                    vote_governor: ''
                  })
                  .then(() => {
                    console.log("User added!");
                    firestore()
                    .collection('users')
                    .where('email','==',values.email)
                    .where('password','==',values.password)
                    .get()
                    .then(querySnapshot => {
                      querySnapshot.forEach(documentSnapshot => {
                        console.log(documentSnapshot.data());
                        global.user = {id: documentSnapshot.id, data:documentSnapshot.data()};
                        RNSmtpMailer.sendMail({
                          mailhost: "smtpout.secureserver.net",
                          port: "465",
                          ssl: true, // optional. if false, then TLS is enabled. Its true by default in android. In iOS TLS/SSL is determined automatically, and this field doesn't affect anything
                          username: "meuvoto2022@meuvotobrasil.com.br",
                          password: "HLoeur0558ffjg214094dlfpr",
                          fromName: "Meu voto", // optional
                          replyTo: "meuvoto2022@meuvotobrasil.com.br", // optional
                          recipients: documentSnapshot.data().email,
                          subject: "MeuVoto",
                          htmlBody: "Cadastro feito com sucesso!",
                        })
                          .then(success => console.log(success))
                          .catch(err => console.log(err));
                        navigation.navigate('Home');
                      });
                      if(querySnapshot.empty){
                        console.log("Account does not exist!");
                      };
                    })})
                    .catch((err) => {console.log(err)});
                  }})
                .catch((err) => {throw new Error('Error: Adding User');});
                } else{
                  console.log("This cpf is already registered!");
                }
                })
                .catch((err) => {throw new Error('Error: Adding User');});;
}

async function resetAllVotes() {
  await firestore()
  .collection('presidents_date')
  .get()
  .then(querySnapshot => {
    querySnapshot.forEach(documentSnapshot => {
      documentSnapshot.ref.update({n_votes: 0});
    })

    firestore()
    .collection('age_filter_presidents')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        documentSnapshot.ref.update({n_votes: 0});
      })
      firestore()
      .collection('gender_filter_presidents')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          documentSnapshot.ref.update({n_votes: 0});
        })
        firestore()
        .collection('race_filter_presidents')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(documentSnapshot => {
            documentSnapshot.ref.update({n_votes: 0});
          })
          firestore()
          .collection('scholar_filter_presidents')
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
              documentSnapshot.ref.update({n_votes: 0});
            })
            firestore()
            .collection('uf_filter_presidents')
            .get()
            .then(querySnapshot => {
              querySnapshot.forEach(documentSnapshot => {
                documentSnapshot.ref.update({n_votes: 0});
              })
              firestore()
            .collection('governors_date')
            .get()
            .then(querySnapshot => {
              querySnapshot.forEach(documentSnapshot => {
                documentSnapshot.ref.update({n_votes: 0});
              })
              firestore()
            .collection('age_filter_governors')
            .get()
            .then(querySnapshot => {
              querySnapshot.forEach(documentSnapshot => {
                documentSnapshot.ref.update({n_votes: 0});
              })
              firestore()
            .collection('gender_filter_governors')
            .get()
            .then(querySnapshot => {
              querySnapshot.forEach(documentSnapshot => {
                documentSnapshot.ref.update({n_votes: 0});
              })
              firestore()
            .collection('race_filter_governors')
            .get()
            .then(querySnapshot => {
              querySnapshot.forEach(documentSnapshot => {
                documentSnapshot.ref.update({n_votes: 0});
              })
              firestore()
            .collection('scholar_filter_governors')
            .get()
            .then(querySnapshot => {
              querySnapshot.forEach(documentSnapshot => {
                documentSnapshot.ref.update({n_votes: 0});
              })
              console.log("Reset terminado!");
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
}

async function getAllPresidents() {

  await firestore()
  .collection('presidents')
  .orderBy('name')
  .get()
  .then(querySnapshot => {
      const list = []

      querySnapshot.forEach(documentSnapshot => {
        list.push({id:documentSnapshot.id, data:documentSnapshot.data()});
      });

      global.presidents = list;

      let d = new Date().getDate();
      let m = new Date().getMonth()+1;
      global.presidents.forEach((president) => {
        firestore()
        .collection('presidents_date')
        .where('id','==',president.id)
        .where('date','==',d)
        .where('month','==',m)
        .get()
        .then((querySnapshot) => {
          if(querySnapshot.empty){
            firestore()
            .collection('presidents_date')
            .add({
                name: president.data.name,
                date: d,
                month: m,
                id: president.id,
                n_votes: 0
              })
          }
        })
      });

      let db = new Date().getDate()-1;
      let mb = new Date().getMonth()+1;
      global.presidents.forEach((president) => {
        firestore()
        .collection('governors_date')
        .where('id','==',president.id)
        .where('date','==',db)
        .where('month','==',mb)
        .get()
        .then((querySnapshot) => {
          if(!querySnapshot.empty){
            querySnapshot.forEach(doc =>{
            firestore()
            .collection('governors_date')
            .where('id','==',president.id)
            .where('date','==',d)
            .where('month','==',m)
            .get()
            .then((query) => {
              query.forEach(d =>{
                if(d.data().n_votes == 0){
                  d.ref.update({n_votes: doc.data().n_votes});
                }
              })
            })
          })
          }
        })
      });
  })
  .catch((err) => {throw new Error('Error: Getting President List');});
}

async function getAllGovernors() {
  await firestore()
  .collection('governors')
  .orderBy('name')
  .get()
  .then(querySnapshot => {
      const list = []

      querySnapshot.forEach(documentSnapshot => {
        list.push({id:documentSnapshot.id, data:documentSnapshot.data()});
      });

      global.governors = list;
      let d = new Date().getDate();
      let m = new Date().getMonth()+1;
      global.governors.forEach((governor) => {
        firestore()
        .collection('governors_date')
        .where('id','==',governor.id)
        .where('date','==',d)
        .where('month','==',m)
        .get()
        .then((querySnapshot) => {
          if(querySnapshot.empty){
            firestore()
            .collection('governors_date')
            .add({
                name: governor.data.name,
                date: d,
                month: m,
                uf: governor.data.uf,
                id: governor.id,
                n_votes: 0
              })
          }
        })
      });

      let db = new Date().getDate()-1;
      let mb = new Date().getMonth()+1;
      global.governors.forEach((governor) => {
        firestore()
        .collection('governors_date')
        .where('id','==',governor.id)
        .where('date','==',db)
        .where('month','==',mb)
        .get()
        .then((querySnapshot) => {
          if(!querySnapshot.empty){
            querySnapshot.forEach(doc =>{
            firestore()
            .collection('governors_date')
            .where('id','==',governor.id)
            .where('date','==',d)
            .where('month','==',m)
            .get()
            .then((query) => {
              query.forEach(d =>{
                if(d.data().n_votes == 0){
                  d.ref.update({n_votes: doc.data().n_votes});
                }
              })
            })
          })
          }
        })
      });
  })
  .catch((err) => {throw new Error('Error: Getting Governor List');});
}

async function updateUserVotePresident(president_id, navigation) {
  navigation.navigate('Vote', {screen: 'SaveVote'});
  new_date = new Date();
  d = new_date.getDate();
  m = new_date.getMonth()+1;

  await firestore()
  .collection('users')
  .doc(global.user.id)
  .get()
  .then((documentSnapshot) => {
      console.log('User updated!');
      let id_president = documentSnapshot.data().vote_president;
      console.log(id_president.length);

      if(id_president.length != 0){
        firestore()
        .collection('presidents_date')
        .where('id','==',id_president)
        .get()
        .then((qr) => {
          qr.forEach((doc) => {
            console.log(doc.data());
            if(doc.data().n_votes > 0 && doc.data().date == d && doc.data().month == m){
              doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(-1)});
            }
          })
          console.log('Removed president date vote!');

          documentSnapshot.ref.update({vote_president: global.presidents[president_id].id});

          firestore()
          .collection('presidents')
          .doc(id_president)
          .get()
          .then((document) => {
              if(document.data().gender_M > 0 && global.user.data.gender == 'M'){
                document.ref.update({gender_M: firebase.firestore.FieldValue.increment(-1)});
              }
              else if(document.data().gender_F > 0 && global.user.data.gender == 'F'){
                document.ref.update({gender_F: firebase.firestore.FieldValue.increment(-1)});
              }
              else if(document.data().gender_Outro > 0 && global.user.data.gender == 'Outro'){
                document.ref.update({gender_Outro: firebase.firestore.FieldValue.increment(-1)});
              }

              if(document.data().race_Amarela > 0 && global.user.data.race == 'Amarela'){
                document.ref.update({race_Amarela: firebase.firestore.FieldValue.increment(-1)});
              }
              else if(document.data().race_Branca > 0 && global.user.data.gender == 'Branca'){
                document.ref.update({race_Branca: firebase.firestore.FieldValue.increment(-1)});
              }
              else if(document.data().race_Indigena > 0 && global.user.data.gender == 'Indígena'){
                document.ref.update({race_Indigena: firebase.firestore.FieldValue.increment(-1)});
              }
              else if(document.data().race_Parda > 0 && global.user.data.gender == 'Parda'){
                document.ref.update({race_Parda: firebase.firestore.FieldValue.increment(-1)});
              }
              else if(document.data().race_Preta > 0 && global.user.data.gender == 'Preta'){
                document.ref.update({race_Preta: firebase.firestore.FieldValue.increment(-1)});
              }

              if(document.data().age_16_25 > 0 && global.user.data.age >= 16 && global.user.data.age <= 25){
                document.ref.update({age_16_25: firebase.firestore.FieldValue.increment(-1)});
              }
              else if(document.data().age_26_35 > 0 && global.user.data.age >= 26 && global.user.data.age <= 35){
                document.ref.update({age_26_35: firebase.firestore.FieldValue.increment(-1)});
              }
              else if(document.data().age_36_45 > 0 && global.user.data.age >= 36 && global.user.data.age <= 45){
                document.ref.update({age_36_45: firebase.firestore.FieldValue.increment(-1)});
              }
              else if(document.data().age_46_55 > 0 && global.user.data.age >= 46 && global.user.data.age <= 55){
                document.ref.update({age_46_55: firebase.firestore.FieldValue.increment(-1)});
              }
              else if(document.data().age_56_65 > 0 && global.user.data.age >= 56 && global.user.data.age <= 65){
                document.ref.update({age_56_65: firebase.firestore.FieldValue.increment(-1)});
              }
              else if(document.data().age_66_75 > 0 && global.user.data.age >= 66 && global.user.data.age <= 75){
                document.ref.update({age_66_75: firebase.firestore.FieldValue.increment(-1)});
              }
              else if(document.data().age_76 > 0 && global.user.data.age >= 76){
                document.ref.update({age_76: firebase.firestore.FieldValue.increment(-1)});
              }

              console.log('Removed filters data!');

              global.user = {id: documentSnapshot.id, data:documentSnapshot.data()};
              console.log('User Updated!');

              firestore()
                    .collection('presidents_date')
                    .where('id','==',global.presidents[president_id].id)
                    .get()
                    .then((qr) => {
                      qr.forEach((doc) => {
                        if(doc.data().date == d && doc.data().month == m){
                          doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(1)});
                        }
                      })
                      console.log('Added president date!')

                    firestore()
                    .collection('presidents')
                    .doc(global.presidents[president_id].id)
                    .get()
                    .then((d) => {
                      if(global.user.data.gender == 'M'){
                        d.ref.update({gender_M: firebase.firestore.FieldValue.increment(1)});
                      }
                      else if(global.user.data.gender == 'F'){
                        d.ref.update({gender_F: firebase.firestore.FieldValue.increment(1)});
                      }
                      else if(global.user.data.gender == 'Outro'){
                        d.ref.update({gender_Outro: firebase.firestore.FieldValue.increment(1)});
                      }
        
                      if(global.user.data.race == 'Amarela'){
                        d.ref.update({race_Amarela: firebase.firestore.FieldValue.increment(1)});
                      }
                      else if(global.user.data.gender == 'Branca'){
                        d.ref.update({race_Branca: firebase.firestore.FieldValue.increment(1)});
                      }
                      else if(global.user.data.gender == 'Indígena'){
                        d.ref.update({race_Indigena: firebase.firestore.FieldValue.increment(1)});
                      }
                      else if(global.user.data.gender == 'Parda'){
                        d.ref.update({race_Parda: firebase.firestore.FieldValue.increment(1)});
                      }
                      else if(global.user.data.gender == 'Preta'){
                        d.ref.update({race_Preta: firebase.firestore.FieldValue.increment(1)});
                      }
        
                      if(global.user.data.age >= 16 && global.user.data.age <= 25){
                        d.ref.update({age_16_25: firebase.firestore.FieldValue.increment(1)});
                      }
                      else if(global.user.data.age >= 26 && global.user.data.age <= 35){
                        d.ref.update({age_26_35: firebase.firestore.FieldValue.increment(1)});
                      }
                      else if(global.user.data.age >= 36 && global.user.data.age <= 45){
                        d.ref.update({age_36_45: firebase.firestore.FieldValue.increment(1)});
                      }
                      else if(global.user.data.age >= 46 && global.user.data.age <= 55){
                        d.ref.update({age_46_55: firebase.firestore.FieldValue.increment(1)});
                      }
                      else if(global.user.data.age >= 56 && global.user.data.age <= 65){
                        d.ref.update({age_56_65: firebase.firestore.FieldValue.increment(1)});
                      }
                      else if(global.user.data.age >= 66 && global.user.data.age <= 75){
                        d.ref.update({age_66_75: firebase.firestore.FieldValue.increment(1)});
                      }
                      else if(global.user.data.age >= 76){
                        d.ref.update({age_76: firebase.firestore.FieldValue.increment(1)});
                      }

                      console.log('Added Filters data!');

                      firestore()
                      .collection('presidents')
                      .orderBy('name')
                      .get()
                      .then(querySnapshot => {
                          const list = []

                          querySnapshot.forEach(documentSnapshot => {
                            list.push({id:documentSnapshot.id, data:documentSnapshot.data()});
                          });

                          global.presidents = list;
                          console.log('Presidents Updated!');
                          navigation.navigate('Vote', {screen: 'Vote1'});
                      })
                    })
              })
          })

        })
      }
      else {
        documentSnapshot.ref.update({vote_president: global.presidents[president_id].id});

        firestore()
          .collection('presidents_date')
          .where('id','==',global.presidents[president_id].id)
          .get()
          .then((qr) => {
            qr.forEach((doc) => {
              if(doc.data().date == d && doc.data().month == m){
                doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(1)});
              }
            })
            console.log('Added president date!')

          firestore()
          .collection('presidents')
          .doc(global.presidents[president_id].id)
          .get()
          .then((d) => {
            if(global.user.data.gender == 'M'){
              d.ref.update({gender_M: firebase.firestore.FieldValue.increment(1)});
            }
            else if(global.user.data.gender == 'F'){
              d.ref.update({gender_F: firebase.firestore.FieldValue.increment(1)});
            }
            else if(global.user.data.gender == 'Outro'){
              d.ref.update({gender_Outro: firebase.firestore.FieldValue.increment(1)});
            }

            if(global.user.data.race == 'Amarela'){
              d.ref.update({race_Amarela: firebase.firestore.FieldValue.increment(1)});
            }
            else if(global.user.data.gender == 'Branca'){
              d.ref.update({race_Branca: firebase.firestore.FieldValue.increment(1)});
            }
            else if(global.user.data.gender == 'Indígena'){
              d.ref.update({race_Indigena: firebase.firestore.FieldValue.increment(1)});
            }
            else if(global.user.data.gender == 'Parda'){
              d.ref.update({race_Parda: firebase.firestore.FieldValue.increment(1)});
            }
            else if(global.user.data.gender == 'Preta'){
              d.ref.update({race_Preta: firebase.firestore.FieldValue.increment(1)});
            }

            if(global.user.data.age >= 16 && global.user.data.age <= 25){
              d.ref.update({age_16_25: firebase.firestore.FieldValue.increment(1)});
            }
            else if(global.user.data.age >= 26 && global.user.data.age <= 35){
              d.ref.update({age_26_35: firebase.firestore.FieldValue.increment(1)});
            }
            else if(global.user.data.age >= 36 && global.user.data.age <= 45){
              d.ref.update({age_36_45: firebase.firestore.FieldValue.increment(1)});
            }
            else if(global.user.data.age >= 46 && global.user.data.age <= 55){
              d.ref.update({age_46_55: firebase.firestore.FieldValue.increment(1)});
            }
            else if(global.user.data.age >= 56 && global.user.data.age <= 65){
              d.ref.update({age_56_65: firebase.firestore.FieldValue.increment(1)});
            }
            else if(global.user.data.age >= 66 && global.user.data.age <= 75){
              d.ref.update({age_66_75: firebase.firestore.FieldValue.increment(1)});
            }
            else if(global.user.data.age >= 76){
              d.ref.update({age_76: firebase.firestore.FieldValue.increment(1)});
            }

            console.log('Added Filters data!');

            firestore()
            .collection('presidents')
            .orderBy('name')
            .get()
            .then(querySnapshot => {
                const list = []

                querySnapshot.forEach(documentSnapshot => {
                  list.push({id:documentSnapshot.id, data:documentSnapshot.data()});
                });

                global.presidents = list;
                console.log('Presidents Updated!');
                navigation.navigate('Vote', {screen: 'Vote1'});
            })
          })
    })
      }
  })
}

async function updateUserVoteGovernor(governor_id, navigation) {
  navigation.navigate('Vote', {screen: 'SaveVote'});
  new_date = new Date();
  d = new_date.getDate();
  m = new_date.getMonth()+1;

  let governors = [];

  for(var i = 0; i < global.governors.length; i++){
    if(global.governors[i].data.uf == global.user.data.uf){
      governors.push({data: global.governors[i].data, id: global.governors[i].id, global_idx: i});
    }
  }

  await firestore()
  .collection('users')
  .doc(global.user.id)
  .get()
  .then((documentSnapshot) => {
      console.log('User updated!');
      let id_governor = global.user.data.vote_governor;

      if(id_governor.length != 0){
        firestore()
        .collection('governors_date')
        .where('id','==',id_governor)
        .get()
        .then((qr) => {
          qr.forEach((doc) => {
            console.log(doc.data());
            if(doc.data().n_votes > 0 && doc.data().date == d && doc.data().month == m){
              doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(-1)});
            }
          })
          console.log('Removed governor date vote!');

          documentSnapshot.ref.update({vote_governor: governors[governor_id].id});

          firestore()
          .collection('governors')
          .doc(id_governor)
          .get()
          .then((document) => {
              if(document.data().gender_M > 0 && global.user.data.gender == 'M'){
                document.ref.update({gender_M: firebase.firestore.FieldValue.increment(-1)});
              }
              else if(document.data().gender_F > 0 && global.user.data.gender == 'F'){
                document.ref.update({gender_F: firebase.firestore.FieldValue.increment(-1)});
              }
              else if(document.data().gender_Outro > 0 && global.user.data.gender == 'Outro'){
                document.ref.update({gender_Outro: firebase.firestore.FieldValue.increment(-1)});
              }

              if(document.data().race_Amarela > 0 && global.user.data.race == 'Amarela'){
                document.ref.update({race_Amarela: firebase.firestore.FieldValue.increment(-1)});
              }
              else if(document.data().race_Branca > 0 && global.user.data.gender == 'Branca'){
                document.ref.update({race_Branca: firebase.firestore.FieldValue.increment(-1)});
              }
              else if(document.data().race_Indigena > 0 && global.user.data.gender == 'Indígena'){
                document.ref.update({race_Indigena: firebase.firestore.FieldValue.increment(-1)});
              }
              else if(document.data().race_Parda > 0 && global.user.data.gender == 'Parda'){
                document.ref.update({race_Parda: firebase.firestore.FieldValue.increment(-1)});
              }
              else if(document.data().race_Preta > 0 && global.user.data.gender == 'Preta'){
                document.ref.update({race_Preta: firebase.firestore.FieldValue.increment(-1)});
              }

              if(document.data().age_16_25 > 0 && global.user.data.age >= 16 && global.user.data.age <= 25){
                document.ref.update({age_16_25: firebase.firestore.FieldValue.increment(-1)});
              }
              else if(document.data().age_26_35 > 0 && global.user.data.age >= 26 && global.user.data.age <= 35){
                document.ref.update({age_26_35: firebase.firestore.FieldValue.increment(-1)});
              }
              else if(document.data().age_36_45 > 0 && global.user.data.age >= 36 && global.user.data.age <= 45){
                document.ref.update({age_36_45: firebase.firestore.FieldValue.increment(-1)});
              }
              else if(document.data().age_46_55 > 0 && global.user.data.age >= 46 && global.user.data.age <= 55){
                document.ref.update({age_46_55: firebase.firestore.FieldValue.increment(-1)});
              }
              else if(document.data().age_56_65 > 0 && global.user.data.age >= 56 && global.user.data.age <= 65){
                document.ref.update({age_56_65: firebase.firestore.FieldValue.increment(-1)});
              }
              else if(document.data().age_66_75 > 0 && global.user.data.age >= 66 && global.user.data.age <= 75){
                document.ref.update({age_66_75: firebase.firestore.FieldValue.increment(-1)});
              }
              else if(document.data().age_76 > 0 && global.user.data.age >= 76){
                document.ref.update({age_76: firebase.firestore.FieldValue.increment(-1)});
              }

              console.log('Removed filters data!');

              global.user = {id: documentSnapshot.id, data:documentSnapshot.data()};
              console.log('User Updated!');

              firestore()
                    .collection('governors_date')
                    .where('id','==',governors[governor_id].id)
                    .get()
                    .then((qr) => {
                      qr.forEach((doc) => {
                        if(doc.data().date == d && doc.data().month == m){
                          doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(1)});
                        }
                      })
                      console.log('Added president date!')

                    firestore()
                    .collection('governors')
                    .doc(governors[governor_id].id)
                    .get()
                    .then((d) => {
                      if(global.user.data.gender == 'M'){
                        d.ref.update({gender_M: firebase.firestore.FieldValue.increment(1)});
                      }
                      else if(global.user.data.gender == 'F'){
                        d.ref.update({gender_F: firebase.firestore.FieldValue.increment(1)});
                      }
                      else if(global.user.data.gender == 'Outro'){
                        d.ref.update({gender_Outro: firebase.firestore.FieldValue.increment(1)});
                      }
        
                      if(global.user.data.race == 'Amarela'){
                        d.ref.update({race_Amarela: firebase.firestore.FieldValue.increment(1)});
                      }
                      else if(global.user.data.gender == 'Branca'){
                        d.ref.update({race_Branca: firebase.firestore.FieldValue.increment(1)});
                      }
                      else if(global.user.data.gender == 'Indígena'){
                        d.ref.update({race_Indigena: firebase.firestore.FieldValue.increment(1)});
                      }
                      else if(global.user.data.gender == 'Parda'){
                        d.ref.update({race_Parda: firebase.firestore.FieldValue.increment(1)});
                      }
                      else if(global.user.data.gender == 'Preta'){
                        d.ref.update({race_Preta: firebase.firestore.FieldValue.increment(1)});
                      }
        
                      if(global.user.data.age >= 16 && global.user.data.age <= 25){
                        d.ref.update({age_16_25: firebase.firestore.FieldValue.increment(1)});
                      }
                      else if(global.user.data.age >= 26 && global.user.data.age <= 35){
                        d.ref.update({age_26_35: firebase.firestore.FieldValue.increment(1)});
                      }
                      else if(global.user.data.age >= 36 && global.user.data.age <= 45){
                        d.ref.update({age_36_45: firebase.firestore.FieldValue.increment(1)});
                      }
                      else if(global.user.data.age >= 46 && global.user.data.age <= 55){
                        d.ref.update({age_46_55: firebase.firestore.FieldValue.increment(1)});
                      }
                      else if(global.user.data.age >= 56 && global.user.data.age <= 65){
                        d.ref.update({age_56_65: firebase.firestore.FieldValue.increment(1)});
                      }
                      else if(global.user.data.age >= 66 && global.user.data.age <= 75){
                        d.ref.update({age_66_75: firebase.firestore.FieldValue.increment(1)});
                      }
                      else if(global.user.data.age >= 76){
                        d.ref.update({age_76: firebase.firestore.FieldValue.increment(1)});
                      }

                      console.log('Added Filters data!');

                      firestore()
                      .collection('governors')
                      .orderBy('name')
                      .get()
                      .then(querySnapshot => {
                          const list = []
                    
                          querySnapshot.forEach(documentSnapshot => {
                            list.push({id:documentSnapshot.id, data:documentSnapshot.data()});
                          });
                    
                          global.governors = list;
                          console.log('Governors Updated!');
                          navigation.navigate('Vote', {screen: 'Vote1'});
                      })
                    })
              })
          })

        })
      }
      else {
        documentSnapshot.ref.update({vote_governor: governors[governor_id].id});

        firestore()
          .collection('governors_date')
          .where('id','==',governors[governor_id].id)
          .get()
          .then((qr) => {
            qr.forEach((doc) => {
              if(doc.data().date == d && doc.data().month == m){
                doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(1)});
              }
            })
            console.log('Added governor date!')

          firestore()
          .collection('governors')
          .doc(governors[governor_id].id)
          .get()
          .then((d) => {
            if(global.user.data.gender == 'M'){
              d.ref.update({gender_M: firebase.firestore.FieldValue.increment(1)});
            }
            else if(global.user.data.gender == 'F'){
              d.ref.update({gender_F: firebase.firestore.FieldValue.increment(1)});
            }
            else if(global.user.data.gender == 'Outro'){
              d.ref.update({gender_Outro: firebase.firestore.FieldValue.increment(1)});
            }

            if(global.user.data.race == 'Amarela'){
              d.ref.update({race_Amarela: firebase.firestore.FieldValue.increment(1)});
            }
            else if(global.user.data.gender == 'Branca'){
              d.ref.update({race_Branca: firebase.firestore.FieldValue.increment(1)});
            }
            else if(global.user.data.gender == 'Indígena'){
              d.ref.update({race_Indigena: firebase.firestore.FieldValue.increment(1)});
            }
            else if(global.user.data.gender == 'Parda'){
              d.ref.update({race_Parda: firebase.firestore.FieldValue.increment(1)});
            }
            else if(global.user.data.gender == 'Preta'){
              d.ref.update({race_Preta: firebase.firestore.FieldValue.increment(1)});
            }

            if(global.user.data.age >= 16 && global.user.data.age <= 25){
              d.ref.update({age_16_25: firebase.firestore.FieldValue.increment(1)});
            }
            else if(global.user.data.age >= 26 && global.user.data.age <= 35){
              d.ref.update({age_26_35: firebase.firestore.FieldValue.increment(1)});
            }
            else if(global.user.data.age >= 36 && global.user.data.age <= 45){
              d.ref.update({age_36_45: firebase.firestore.FieldValue.increment(1)});
            }
            else if(global.user.data.age >= 46 && global.user.data.age <= 55){
              d.ref.update({age_46_55: firebase.firestore.FieldValue.increment(1)});
            }
            else if(global.user.data.age >= 56 && global.user.data.age <= 65){
              d.ref.update({age_56_65: firebase.firestore.FieldValue.increment(1)});
            }
            else if(global.user.data.age >= 66 && global.user.data.age <= 75){
              d.ref.update({age_66_75: firebase.firestore.FieldValue.increment(1)});
            }
            else if(global.user.data.age >= 76){
              d.ref.update({age_76: firebase.firestore.FieldValue.increment(1)});
            }

            console.log('Added Filters data!');

            firestore()
            .collection('governors')
            .orderBy('name')
            .get()
            .then(querySnapshot => {
                const list = []
          
                querySnapshot.forEach(documentSnapshot => {
                  list.push({id:documentSnapshot.id, data:documentSnapshot.data()});
                });
          
                global.governors = list;
                console.log('Governors Updated!');
                navigation.navigate('Vote', {screen: 'Vote1'});
            })
          })
    })
      }
  })
}

async function updateUserPlan(plan){
  await firestore()
    .collection('users')
    .doc(global.id)
    .update({
        plan: plan,
    }).then(() => {
        console.log('Plan Registered!');
    })
    .catch((err) => {throw new Error('Error: Updating User Plan');});
}

async function updateUserPass(email, pass){
  await firestore()
    .collection('users')
    .where('email','==',email)
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        documentSnapshot.ref.update({password: pass}) 
      });
    })
    .catch((err) => {throw new Error('Error: Updating User Pass');});
}

module.exports = {
    verifyUserByEmailAndPassword: verifyUserByEmailAndPassword,
    insertUser: insertUser,
    getAllPresidents: getAllPresidents,
    getAllGovernors: getAllGovernors,
    updateUserVotePresident: updateUserVotePresident,
    updateUserVoteGovernor: updateUserVoteGovernor,
    updateUserPlan: updateUserPlan,
    updateUserPass: updateUserPass,
    resetAllVotes: resetAllVotes
}

// async function updateUserVoteGovernor(governor_id, navigation) {
//   navigation.navigate('Vote', {screen: 'SaveVote'});
//   new_date = new Date();
//   d = new_date.getDate();
//   m = new_date.getMonth()+1;

//   let governors = [];

//   for(var i = 0; i < global.governors.length; i++){
//     if(global.governors[i].data.uf == global.user.data.uf){
//       governors.push({data: global.governors[i].data, id: global.governors[i].id, global_idx: i});
//     }
//   }

//   await firestore()
//   .collection('users')
//   .doc(global.user.id)
//   .update({
//     vote_governor: governors[governor_id].id,
//   }).then(() => {
//       console.log('Governor Vote Registered!');
//       firestore()
//       .collection('users')
//       .doc(global.user.id)
//       .get()
//       .then((documentSnapshot) => {
//           let id_governor = global.user.data.vote_governor;

//             if(id_governor.length != 0){
//               found = true;
//                 firestore()
//                 .collection('governors_date')
//                 .where('id','==',id_governor)
//                 .get()
//                 .then((qr) => {
//                   qr.forEach(doc => {
//                     if(doc.data().n_votes > 0 && doc.data().date == d && doc.data().month == m){
//                     doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(-1)});
//                     }
//                   })

//                     firestore()
//                     .collection('gender_filter_governors')
//                     .where('governor','==',id_governor)
//                     .where('gender','==',global.user.data.gender)
//                     .get()
//                     .then((query) => {
//                       query.forEach(doc => {
//                         doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(-1)});
//                       })

//                       firestore()
//                       .collection('race_filter_governors')
//                       .where('governor','==',id_governor)
//                       .where('race','==',global.user.data.race)
//                       .get()
//                       .then((quer) => {
//                         quer.forEach(doc => {
//                           doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(-1)});
//                         })

//                         firestore()
//                         .collection('scholar_filter_governors')
//                         .where('governor','==',id_governor)
//                         .where('scholar','==',global.user.data.scholar)
//                         .get()
//                         .then((que) => {
//                           que.forEach(doc => {
//                             doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(-1)});
//                           })

//                             firestore()
//                             .collection('age_filter_governors')
//                             .where('governor','==',id_governor)
//                             .get()
//                             .then((qu) => {
//                               qu.forEach(doc => {
//                                 if(doc.data().min_age <= global.user.data.age && doc.data().max_age >= global.user.data.age){
//                                   doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(-1)});
//                                 }
//                               })
//                             })
//                         })
//                       })
//                     })

//                     global.user = {id: documentSnapshot.id, data:documentSnapshot.data()};
//                     console.log('User Updated!');
          
//                     firestore()
//                     .collection('governors_date')
//                     .where('id','==',governors[governor_id].id)
//                     .get()
//                     .then((qr) => {
//                       qr.forEach(doc => {
//                         if(doc.data().date == d && doc.data().month == m){
//                         doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(1)});
//                         }
//                       })

//                       firestore()
//                     .collection('gender_filter_governors')
//                     .where('governor','==',governors[governor_id].id)
//                     .where('gender','==',global.user.data.gender)
//                     .get()
//                     .then((query) => {
//                       query.forEach(doc => {
//                         doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(1)});
//                       })

//                       firestore()
//                       .collection('race_filter_governors')
//                       .where('governor','==',governors[governor_id].id)
//                       .where('race','==',global.user.data.race)
//                       .get()
//                       .then((quer) => {
//                         quer.forEach(doc => {
//                           doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(1)});
//                         })

//                         firestore()
//                         .collection('scholar_filter_governors')
//                         .where('governor','==',governors[governor_id].id)
//                         .where('scholar','==',global.user.data.scholar)
//                         .get()
//                         .then((que) => {
//                           que.forEach(doc => {
//                             doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(1)});
//                           })

//                             firestore()
//                             .collection('age_filter_governors')
//                             .where('governor','==',governors[governor_id].id)
//                             .where('min_age','<=',global.user.data.age)
//                             .where('max_age','>=',global.user.data.age)
//                             .get()
//                             .then((qu) => {
//                               qu.forEach(doc => {
//                                 if(doc.data().min_age <= global.user.data.age && doc.data().max_age >= global.user.data.age){
//                                   doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(1)});
//                                 }
//                               })
//                             })
//                         })
//                       })
//                     })

//                       console.log('Votes governor Updated!')
//                       navigation.navigate('Vote', {screen: 'Vote1'});
//                     })
//                   })
//             }

//             else{

//                     global.user = {id: documentSnapshot.id, data:documentSnapshot.data()};
//                     console.log('User Updated!');
          
//                     firestore()
//                     .collection('governors_date')
//                     .where('id','==',governors[governor_id].id)
//                     .get()
//                     .then((qr) => {
//                       qr.forEach(doc => {
//                         if(doc.data().date == d && doc.data().month == m){
//                         doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(1)});
//                         }
//                       })

//                       firestore()
//                     .collection('gender_filter_governors')
//                     .where('governor','==',governors[governor_id].id)
//                     .where('gender','==',global.user.data.gender)
//                     .get()
//                     .then((query) => {
//                       query.forEach(doc => {
//                         doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(1)});
//                       })

//                       firestore()
//                       .collection('race_filter_governors')
//                       .where('governor','==',governors[governor_id].id)
//                       .where('race','==',global.user.data.race)
//                       .get()
//                       .then((quer) => {
//                         quer.forEach(doc => {
//                           doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(1)});
//                         })

//                         firestore()
//                         .collection('scholar_filter_governors')
//                         .where('governor','==',governors[governor_id].id)
//                         .where('scholar','==',global.user.data.scholar)
//                         .get()
//                         .then((que) => {
//                           que.forEach(doc => {
//                             doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(1)});
//                           })

//                             firestore()
//                             .collection('age_filter_governors')
//                             .where('governor','==',governors[governor_id].id)
//                             .get()
//                             .then((qu) => {
//                               qu.forEach(doc => {
//                                 if(doc.data().min_age <= global.user.data.age && doc.data().max_age >= global.user.data.age){
//                                   doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(1)});
//                                 }
//                               })
//                             })
//                         })
//                       })
//                     })

//                     console.log('Votes governor Updated!')
//                     navigation.navigate('Vote', {screen: 'Vote1'});
//                     })
//             }

//       });
//   });
// }

// async function updateUserVotePresident(president_id, navigation) {
//   navigation.navigate('Vote', {screen: 'SaveVote'});
//   new_date = new Date();
//   d = new_date.getDate();
//   m = new_date.getMonth()+1;
  
//   await firestore()
//       .collection('users')
//       .doc(global.user.id)
//       .get()
//       .then((documentSnapshot) => {
//           console.log('User updated!');
//           let id_president = documentSnapshot.data().vote_president;
//           console.log(id_president.length);

//           if(id_president.length != 0){
//                 firestore()
//                 .collection('presidents_date')
//                 .where('id','==',id_president)
//                 .get()
//                 .then((qr) => {
//                   qr.forEach((doc) => {
//                     console.log(doc.data());
//                     if(doc.data().n_votes > 0 && doc.data().date == d && doc.data().month == m){
//                       doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(-1)});
//                     }
//                   })
//                   console.log('Removed president date!');

//                   documentSnapshot.ref.update({vote_president: global.presidents[president_id].id});

//                     firestore()
//                     .collection('gender_filter_presidents')
//                     .where('president','==',id_president)
//                     .where('gender','==',global.user.data.gender)
//                     .get()
//                     .then((query) => {
//                       query.forEach((doc) => {
//                         if(doc.data().n_votes > 0){
//                         doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(-1)});
//                         }
//                       })
//                       console.log('Removed gender filter!');

//                       firestore()
//                       .collection('race_filter_presidents')
//                       .where('president','==',id_president)
//                       .where('race','==',global.user.data.race)
//                       .get()
//                       .then((quer) => {
//                         quer.forEach((doc) => {
//                           if(doc.data().n_votes > 0){
//                           doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(-1)});
//                           }
//                         })
//                         console.log('Removed race filter!');

//                         firestore()
//                         .collection('scholar_filter_presidents')
//                         .where('president','==',id_president)
//                         .where('scholar','==',global.user.data.scholar)
//                         .get()
//                         .then((que) => {
//                           que.forEach((doc) => {
//                             if(doc.data().n_votes > 0){
//                             doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(-1)});
//                             }
//                           })
//                           console.log('Removed scholar filter!');

//                           firestore()
//                           .collection('uf_filter_presidents')
//                           .where('president','==',id_president)
//                           .where('uf','==',global.user.data.uf)
//                           .get()
//                           .then((qu) => {
//                             qu.forEach((doc) => {
//                               if(doc.data().n_votes > 0){
//                               doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(-1)});
//                               }
//                             })
//                             console.log('Removed uf filter!');

//                             firestore()
//                             .collection('age_filter_presidents')
//                             .where('president','==',id_president)
//                             .get()
//                             .then((q) => {
//                               q.forEach((doc) => {
//                                 if(doc.data().n_votes > 0){
//                                 if(doc.data().min_age <= global.user.data.age && doc.data().max_age >= global.user.data.age){
//                                   doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(-1)});
//                                 }
//                               }
//                               })
//                               console.log('Removed age filter!');
//                             })
//                           })
//                         })
//                       })
//                     })

//                     global.user = {id: documentSnapshot.id, data:documentSnapshot.data()};
//                     console.log('User Updated!');
          
//                     firestore()
//                     .collection('presidents_date')
//                     .where('id','==',global.presidents[president_id].id)
//                     .get()
//                     .then((qr) => {
//                       qr.forEach((doc) => {
//                         if(doc.data().date == d && doc.data().month == m){
//                           doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(1)});
//                         }
//                       })
//                       console.log('Added president date!')

//                     firestore()
//                     .collection('gender_filter_presidents')
//                     .where('president','==',global.presidents[president_id].id)
//                     .where('gender','==',global.user.data.gender)
//                     .get()
//                     .then((query) => {
//                       query.forEach((doc) => {
//                         doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(1)});
//                       })
//                       console.log('Gender Filter President Updated')

//                       firestore()
//                       .collection('race_filter_presidents')
//                       .where('president','==',global.presidents[president_id].id)
//                       .where('race','==',global.user.data.race)
//                       .get()
//                       .then((quer) => {
//                         quer.forEach((doc) => {
//                           doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(1)});
//                         })
//                         console.log('Race Filter President Updated')

//                         firestore()
//                         .collection('scholar_filter_presidents')
//                         .where('president','==',global.presidents[president_id].id)
//                         .where('scholar','==',global.user.data.scholar)
//                         .get()
//                         .then((que) => {
//                           que.forEach((doc) => {
//                             doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(1)});
//                           })
//                           console.log('Scholar Filter President Updated')

//                           firestore()
//                           .collection('uf_filter_presidents')
//                           .where('president','==',global.presidents[president_id].id)
//                           .where('uf','==',global.user.data.uf)
//                           .get()
//                           .then((qu) => {
//                             qu.forEach((doc) => {
//                               doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(1)});
//                             })
//                             console.log('UF Filter President Updated')

//                             firestore()
//                             .collection('age_filter_presidents')
//                             .where('president','==',global.presidents[president_id].id)
//                             .get()
//                             .then((q) => {
//                               q.forEach((doc) => {
//                                 if(doc.data().min_age <= global.user.data.age && doc.data().max_age >= global.user.data.age){
//                                   doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(1)});
//                                 }
//                               })
//                               console.log('Age Filter President Updated')
//                               console.log('Votes president Updated!');
//                               navigation.navigate('Vote', {screen: 'Vote1'});
//                             })
//                           })
//                         })
//                       })
//                     })
//                     })
//                   })
//             }
//             else{

//                     firestore()
//                     .collection('users')
//                     .doc(global.user.id)
//                     .update({
//                         vote_president: global.presidents[president_id].id,
//                     })
//                     .then(() => {
//                     console.log('President Vote Registered!');


//                     global.user = {id: documentSnapshot.id, data:documentSnapshot.data()};
//                     console.log('User Updated!');
          
//                     firestore()
//                     .collection('presidents_date')
//                     .where('id','==',global.presidents[president_id].id)
//                     .get()
//                     .then((qr) => {
//                       qr.forEach((doc) => {
//                         if(doc.data().date == d && doc.data().month == m){
//                         doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(1)});
//                         }
//                       })

//                     firestore()
//                     .collection('gender_filter_presidents')
//                     .where('president','==',global.presidents[president_id].id)
//                     .where('gender','==',global.user.data.gender)
//                     .get()
//                     .then((query) => {
//                       query.forEach((doc) => {
//                         doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(1)});
//                       })
//                       console.log('Gender Filter President Updated')

//                       firestore()
//                       .collection('race_filter_presidents')
//                       .where('president','==',global.presidents[president_id].id)
//                       .where('race','==',global.user.data.race)
//                       .get()
//                       .then((quer) => {
//                         quer.forEach((doc) => {
//                           doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(1)});
//                         })
//                         console.log('Race Filter President Updated')

//                         firestore()
//                         .collection('scholar_filter_presidents')
//                         .where('president','==',global.presidents[president_id].id)
//                         .where('scholar','==',global.user.data.scholar)
//                         .get()
//                         .then((que) => {
//                           que.forEach((doc) => {
//                             doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(1)});
//                           })
//                           console.log('Scholar Filter President Updated')

//                           firestore()
//                           .collection('uf_filter_presidents')
//                           .where('president','==',global.presidents[president_id].id)
//                           .where('uf','==',global.user.data.uf)
//                           .get()
//                           .then((qu) => {
//                             qu.forEach((doc) => {
//                               doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(1)});
//                             })
//                             console.log('UF Filter President Updated')

//                             firestore()
//                             .collection('age_filter_presidents')
//                             .where('president','==',global.presidents[president_id].id)
//                             .get()
//                             .then((q) => {
//                               q.forEach((doc) => {
//                                 if(doc.data().min_age <= global.user.data.age && doc.data().max_age >= global.user.data.age){
//                                   doc.ref.update({n_votes: firebase.firestore.FieldValue.increment(1)});
//                                 }
//                               })
//                               console.log('Age Filter President Updated')
//                               console.log('Votes president Updated!');
//                               navigation.navigate('Vote', {screen: 'Vote1'});
//                             })
//                           })
//                         })
//                       })
//                     })
//                     })
//                   })
//             }

//   });
// }