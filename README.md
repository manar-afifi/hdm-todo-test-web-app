# 📌 Frontend : Suppression des tâches 

## 🎯 Le but 

Implémentation de la suppression des tâches dans le frontend de l'application Todo List.

## 📌 Ce que j'ai modifié

-> Ajout de la fonction handleDelete permettant d'envoyer une requête DELETE à l'API et de rafraîchir la liste des tâches après suppression.

![image](https://github.com/user-attachments/assets/ea277652-604f-4ff7-aa58-a46f60a65c50)

-> Ajout de l'appel handleDelete dans le bouton de suppression 

![image](https://github.com/user-attachments/assets/092a3aed-d2d5-460c-994d-f4200c4bdcfa)

## Test avec Postman 

Création d'une nouvelle tâche : 

![image](https://github.com/user-attachments/assets/d1d9b720-676e-45a4-b008-5a44579310e4)

![image](https://github.com/user-attachments/assets/f2356899-8c12-4fae-b252-5ab8c289f650)

En appuyant sur le bouton, la tâche a été supprimée : 

![image](https://github.com/user-attachments/assets/6ba3524e-f797-4ba0-b3c2-62d28213effe)

# 📌 Frontend : Création des tâches 

## 🎯 Le but

L'objectif de cette implémentation est de permettre aux utilisateurs d'ajouter de nouvelles tâches à la Todo List via une interface utilisateur intuitive. L'ajout de tâche est effectué via une requête API envoyée au backend.

## 📌 Ce que j'ai modifié

-> Ajout d'un champ pour entrer une nouvelle tâche TextField pour permettre aux users d'entrer le nom de la tâche et bouton pour envoyer la requêtte.
-> Utilisation d’un état pour gérer la tâche en cours d’ajout : ajout d'une variable d'état newTask gérée avec useState, afin de stocker la valeur entrée par l'utilisateur.

![image](https://github.com/user-attachments/assets/05900e27-16ce-47ab-925d-cce32e1ef27b)

-> Création de la fonction handleSave pour enregistrer une nouvelle tâche

![image](https://github.com/user-attachments/assets/d84fa680-64bb-46af-8ef7-ecabac44ea58)

 Pour Vérifier si le champ de saisie n'est pas vide et envoie une requête POST au backend (/tasks) puis il rafraîchit la liste des tâches après l'ajout.

 
## Résultat 

![image](https://github.com/user-attachments/assets/6c548fed-3652-42fa-b109-fc7488240b11)

![image](https://github.com/user-attachments/assets/09fdfd02-ccdd-4849-bb3f-470b9a2d58ab)


## Installation

```bash
$ yarn install
```

## Running the app

```bash
$ yarn dev
```















