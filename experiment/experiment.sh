#!/bin/bash

#Voxels with intensity value range between [0, 5[ were discard
 
n_instances=5000
n_features=12
clustering_script_path="/home/rafaelssantos/workspaces/git/github/mfs-cluvis/src/clustering/clustering.py"
score_script_path="/home/rafaelssantos/workspaces/git/github/mfs-cluvis/src/feature_score/feature_score.py"


input_data_path=""
input_labels_path=""
output_clustering_path=""



init_paths(){
    input_data_path="/home/rafaelssantos/experiment-$2/$1/$1.raw"
    input_labels_path="/home/rafaelssantos/experiment-$2/$1/$1info.txt"
    output_clustering_path="/home/rafaelssantos/experiment-$2/$1/$1.clustered.csv"
    output_score_path="/home/rafaelssantos/experiment-$2/$1/score-$1.json"
}



# python3 $clustering_script_path -h



exec_clustering(){
    init_paths 'bucky-ball' $n_instances
    python3 $clustering_script_path -i $input_data_path -m $n_features -n $n_instances -o $output_clustering_path

    init_paths 'foot' $n_instances
    python3 $clustering_script_path -i $input_data_path -m $n_features -n $n_instances -o $output_clustering_path

    init_paths 'engine' $n_instances
    python3 $clustering_script_path -i $input_data_path -m $n_features -n $n_instances -o $output_clustering_path

    init_paths 'visible-male-head' $n_instances
    python3 $clustering_script_path -i $input_data_path -m $n_features -n $n_instances -o $output_clustering_path

    init_paths 'tooth' $n_instances
    python3 $clustering_script_path -i $input_data_path -m $n_features -n $n_instances -o $output_clustering_path

    init_paths 'tomato' $n_instances
    python3 $clustering_script_path -i $input_data_path -m $n_features -n $n_instances -o $output_clustering_path
}




exec_feature_score(){
    init_paths 'bucky-ball' $n_instances
    python2 $score_script_path -i $output_clustering_path -m $n_features -l $input_labels_path -o $output_score_path

    init_paths 'foot' $n_instances
    python2 $score_script_path -i $output_clustering_path -m $n_features -l $input_labels_path -o $output_score_path

    init_paths 'engine' $n_instances
    python2 $score_script_path -i $output_clustering_path -m $n_features -l $input_labels_path -o $output_score_path

    init_paths 'visible-male-head' $n_instances
    python2 $score_script_path -i $output_clustering_path -m $n_features -l $input_labels_path -o $output_score_path

    init_paths 'tooth' $n_instances
    python2 $score_script_path -i $output_clustering_path -m $n_features -l $input_labels_path -o $output_score_path

    init_paths 'tomato' $n_instances
    python2 $score_script_path -i $output_clustering_path -m $n_features -l $input_labels_path -o $output_score_path
}

exec_clustering
exec_feature_score