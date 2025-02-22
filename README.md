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

# 📌 Frontend : Modif des tâches 

## 🎯 Le but

L'objectif est d'implémenter la fonctionnalité permettant aux utilisateurs de modifier une tâche existante via l'interface frontend et d'envoyer cette modification au backend.

## 📌 Ce que j'ai modifié

-> Ajout d’un état pour suivre les modifications locales : 
Ajout editedTasks pour stocker les modifs d'un tâche 

![image](https://github.com/user-attachments/assets/6706893d-83a6-4935-adac-c53838a00b7e)

-> Fonction handleUpdate : L'utilisateur peut modifier une tâche, et si le texte change, un bouton ✔ devient actif pour enregistrer la modification.

-> Ajout de la logique d'affichage et de modification : Le champ de texte affiche la valeur actuelle de la tâche. Si l'utilisateur modifie le texte, il est stocké dans editedTasks. Ainsi que le bouton ✔ est activé uniquement si une modification est détectée.

## Résultat 

![image](https://github.com/user-attachments/assets/726e8d2f-cfa6-4283-873a-41aee65461cb)

![image](https://github.com/user-attachments/assets/396aa4a7-24c1-408e-a209-a169a2a4f589)

![image](https://github.com/user-attachments/assets/396c76e0-072d-4791-8e6d-f2cc36d0b6b8)

# 📌 Bonus : Implémentation du Toggle pour marquer les tâches comme complétées

## 🎯 Le but

L’objectif de cette fonctionnalité est de permettre aux utilisateurs de marquer une tâche comme complétée ou de la remettre en cours en cliquant sur un bouton dédié. Cette interaction est synchronisée avec le backend, assurant que l’état des tâches est bien sauvegardé.

Une tâche complétée est visuellement différenciée avec un texte barré et une couleur verte, améliorant ainsi la clarté et l’expérience utilisateur.


## 📌 Ce que j'ai modifié

-> Ajout une fonction hadleToggleCompleted pour gérer le toggle :

![image](https://github.com/user-attachments/assets/2b886f97-6d19-47f3-b8bc-5da31feb616e)

-> Ajout d'un bouton visuel pour modifier l'état d'une tâche 

![image](https://github.com/user-attachments/assets/fbe35192-6ec8-490f-844f-15201a7537bb)


![image](https://github.com/user-attachments/assets/aafddaff-cd53-44d9-ad53-20b051a88b48)

->  Modification de l'affichage des tâches complétées

## Résultat 

![image](https://github.com/user-attachments/assets/c5c93221-059d-447b-8f17-2f17cf251aaa)

![image](https://github.com/user-attachments/assets/30168649-5011-4c16-9dce-3d11b30010c1)

+ changement des icônes 

## Installation

```bash
$ yarn install
```

## Running the app

```bash
$ yarn dev
```















