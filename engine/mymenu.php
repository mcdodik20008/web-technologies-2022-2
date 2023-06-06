<?php
function getAllMyMenu()
{
    $nodes = getAssocResult("SELECT id, name, parent_menu_id FROM menu");
    $result = [];
    foreach ($nodes as $node) {
        if ($node['parent_menu_id'] != null) {
            $parent = &getParentForChildren($result, $node);
            $parent['childs'][] = [
                'id' => $node['id'],
                'name' => $node['name'],
                'childs' => []
            ];
            continue;
        }

        $result[] = [
            'id' => $node['id'],
            'name' => $node['name'],
            'childs' => []
        ];
    }
    return $result;
}

function &getParentForChildren(&$parents, $child)
{
    foreach ($parents as &$parent) {
        if ($parent['id'] == $child['parent_menu_id']) {
            return $parent;
        }
        $intermediateParent = &getParentForChildren($parent['childs'], $child);
        if ($intermediateParent != null) {
            return $intermediateParent;
        }

    }
}