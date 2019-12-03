#!/bin/bash

#Voxels with intensity value range between [0, 5[ were discard
 
n_instances=3000
n_features=12
clustering_script_path="/home/rafaelssantos/workspaces/git/github/mfs-cluvis/src/clustering/clustering.py"



input_data_path=""
input_labels_path=""
output_clustering_path=""

init_paths(){
    input_data_path="/home/rafaelssantos/experiment/$1/$1.raw"
    input_labels_path="/home/rafaelssantos/experiment//$1/$1.info.txt"
    output_clustering_path="/home/rafaelssantos/experiment//$1/$1.clustered.csv"
}

# python3 $clustering_script_path -h

# init_paths 'bucky-ball'
# python3 $clustering_script_path -i $input_data_path -m $n_features -n $n_instances -o $output_clustering_path

# init_paths 'foot'
# python3 $clustering_script_path -i $input_data_path -m $n_features -n $n_instances -o $output_clustering_path

# init_paths 'engine'
# python3 $clustering_script_path -i $input_data_path -m $n_features -n $n_instances -o $output_clustering_path

# init_paths 'visible-male-head'
# python3 $clustering_script_path -i $input_data_path -m $n_features -n $n_instances -o $output_clustering_path

# init_paths 'tooth'
# python3 $clustering_script_path -i $input_data_path -m $n_features -n $n_instances -o $output_clustering_path

init_paths 'tomato'
python3 $clustering_script_path -i $input_data_path -m $n_features -n $n_instances -o $output_clustering_path